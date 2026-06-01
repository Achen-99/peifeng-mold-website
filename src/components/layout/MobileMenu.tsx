"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transition-transform"
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-steel hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-steel transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-sm text-steel-light transition-colors hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Get Your Quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
