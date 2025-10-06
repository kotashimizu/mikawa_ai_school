'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FixedCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 320);
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href="#contact"
        className="flex max-w-xs flex-col gap-2 rounded-2xl bg-[#cf112d] px-5 py-4 text-sm font-semibold text-white shadow-[0_22px_44px_rgba(207,17,45,0.45)] transition hover:translate-y-0.5"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">24時間いつでも</span>
        <span className="flex items-center gap-2 text-base">
          <span aria-hidden className="text-lg">▶</span>
          オンライン説明会に参加する
          <span aria-hidden>→</span>
        </span>
      </Link>
    </div>
  );
}
