import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Global overlay coordinator.
 *
 * Exactly one floating overlay (mobile menu, AI chatbot, )
 * may be open at a time. Opening one closes the others. Escape closes
 * whatever is open. While the mobile menu is open, page scrolling is
 * locked (with scrollbar-width compensation so the layout never shifts).
 */
export type OverlayId = 'menu' | 'chat';

interface UIContextValue {
  activeOverlay: OverlayId | null;
  isOpen: (id: OverlayId) => boolean;
  openOverlay: (id: OverlayId) => void;
  closeOverlay: (id?: OverlayId) => void;
  toggleOverlay: (id: OverlayId) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

/** Overlays that lock page scroll while open. */
const SCROLL_LOCKING: ReadonlySet<OverlayId> = new Set(['menu']);

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeOverlay, setActiveOverlay] = useState<OverlayId | null>(null);
  const scrollLockCount = useRef(0);

  const openOverlay = useCallback((id: OverlayId) => {
    setActiveOverlay(id);
  }, []);

  const closeOverlay = useCallback((id?: OverlayId) => {
    setActiveOverlay((current) => {
      if (id === undefined || current === id) return null;
      return current;
    });
  }, []);

  const toggleOverlay = useCallback((id: OverlayId) => {
    setActiveOverlay((current) => (current === id ? null : id));
  }, []);

  const isOpen = useCallback((id: OverlayId) => activeOverlay === id, [activeOverlay]);

  // Escape closes whatever overlay is open.
  useEffect(() => {
    if (!activeOverlay) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveOverlay(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeOverlay]);

  // Body scroll lock for full-screen overlays (mobile menu).
  useEffect(() => {
    const shouldLock = activeOverlay !== null && SCROLL_LOCKING.has(activeOverlay);
    if (!shouldLock) return;

    scrollLockCount.current += 1;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      scrollLockCount.current -= 1;
      if (scrollLockCount.current === 0) {
        document.body.style.overflow = previousOverflow;
        document.body.style.paddingRight = previousPaddingRight;
      }
    };
  }, [activeOverlay]);

  return (
    <UIContext.Provider value={{ activeOverlay, isOpen, openOverlay, closeOverlay, toggleOverlay }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return ctx;
}
