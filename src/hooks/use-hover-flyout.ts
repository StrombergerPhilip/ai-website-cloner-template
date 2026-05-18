"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type HoverFlyoutHandlers = {
  open: boolean;
  triggerProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: (e: React.FocusEvent) => void;
  };
  panelProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: (e: React.FocusEvent) => void;
  };
  rootRef: React.RefObject<HTMLDivElement | null>;
  close: () => void;
};

export function useHoverFlyout(openDelay = 80, closeDelay = 160): HoverFlyoutHandlers {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const scheduleOpen = useCallback(() => {
    cancelTimers();
    openTimer.current = setTimeout(() => setOpen(true), openDelay);
  }, [openDelay]);

  const scheduleClose = useCallback(() => {
    cancelTimers();
    closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay]);

  const close = useCallback(() => {
    cancelTimers();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, close]);

  useEffect(() => cancelTimers, []);

  const onBlurWithinRoot = (e: React.FocusEvent) => {
    const next = e.relatedTarget as Node | null;
    if (!next || !rootRef.current?.contains(next)) {
      scheduleClose();
    }
  };

  return {
    open,
    triggerProps: {
      onMouseEnter: scheduleOpen,
      onMouseLeave: scheduleClose,
      onFocus: scheduleOpen,
      onBlur: onBlurWithinRoot,
    },
    panelProps: {
      onMouseEnter: () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
      },
      onMouseLeave: scheduleClose,
      onFocus: scheduleOpen,
      onBlur: onBlurWithinRoot,
    },
    rootRef,
    close,
  };
}
