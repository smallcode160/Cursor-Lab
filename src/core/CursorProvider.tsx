import { type MotionValue, useMotionValue } from "framer-motion";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import type { CursorState } from "./types";

interface CursorContextValue {
  x: MotionValue<number>;
  y: MotionValue<number>;
  state: CursorState;
  visible: boolean;
  isDesktop: boolean;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

const TEXT_SELECTOR = '[data-cursor="text"], input, textarea, [contenteditable="true"]';
const HOVER_SELECTOR = '[data-cursor="hover"], a, button, select, label, [role="button"]';
const DESKTOP_QUERY = "(hover: hover) and (pointer: fine)";

export function CursorProvider({ children }: { children: ReactNode }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [target, setTarget] = useState<"idle" | "hover" | "text">("idle");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      setTarget(
        el?.closest(TEXT_SELECTOR) ? "text" : el?.closest(HOVER_SELECTOR) ? "hover" : "idle",
      );
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) setVisible(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseout", onOut);
    };
  }, [isDesktop, x, y]);

  const state: CursorState = pressed ? "click" : target;

  return (
    <CursorContext.Provider value={{ x, y, state, visible, isDesktop, activeId, setActiveId }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used inside <CursorProvider>");
  return ctx;
}
