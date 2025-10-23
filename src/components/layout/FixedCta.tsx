'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export function FixedCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300);
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`fixed-cta fixed bottom-6 right-4 md:bottom-8 md:right-6 hidden md:block z-[999] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
    >
      <Link
        href="#contact"
        className="fixed-cta-link flex flex-col items-center py-4 px-6 bg-[var(--color-accent)] text-white rounded-xl shadow-[var(--shadow-lg)] max-w-[250px] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
      >
        <span className="cta-label text-xs font-bold mb-2 tracking-[0.3em] uppercase">24時間いつでも</span>
        <span className="cta-text flex items-center gap-2 text-sm font-bold text-center">
          <PhoneIcon className="w-4 h-4" />
          オンライン相談はこちら
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </Link>
    </div>
  );
}
