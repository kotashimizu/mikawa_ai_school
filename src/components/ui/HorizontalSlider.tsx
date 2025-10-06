"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import clsx from 'clsx';

type HorizontalSliderProps = {
  items: ReactNode[];
  className?: string;
  ariaLabel?: string;
};

export function HorizontalSlider({ items, className, ariaLabel }: HorizontalSliderProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateControls = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 8);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateControls();
    const handleScroll = () => updateControls();
    window.addEventListener('resize', handleScroll);
    track.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleScroll);
      track.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollByAmount = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;
    const delta = track.clientWidth * 0.8;
    const amount = direction === 'prev' ? -delta : delta;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className={clsx('space-y-4', className)}>
      <div ref={trackRef} className="slider-track" aria-label={ariaLabel} role="list">
        {items.map((item, idx) => (
          <div key={idx} className="slider-item" role="listitem">
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium text-slate-400">横にスクロールしてご覧ください</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount('prev')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-primary hover:text-primary disabled:opacity-30"
            aria-label="前のカードに移動"
            disabled={!canPrev}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('next')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-primary hover:text-primary disabled:opacity-30"
            aria-label="次のカードに移動"
            disabled={!canNext}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
