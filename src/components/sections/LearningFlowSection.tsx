'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { learningFlow } from '@/lib/content/static-content';

export function LearningFlowSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1400px]">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            学びのステップ
          </h2>
        </div>

        {/* ステップ */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {learningFlow.map((step, index) => (
            <div key={step.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full"
              >
                <div className="text-center">
                  <div className="inline-block bg-[var(--color-accent)] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mb-4">{step.subtitle}</p>
                  <p className="text-base text-[var(--color-text)]">{step.description}</p>
                </div>
              </motion.div>

              {/* 矢印（最後のステップ以外） */}
              {index < learningFlow.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRightIcon className="w-10 h-10 text-[var(--color-accent)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#programs"
            className="inline-flex items-center justify-center gap-2 py-4 px-8 bg-[var(--color-primary)] hover:bg-[#15395A] text-white rounded-full font-bold text-base transition-all duration-300"
          >
            <span>まずはSTEP 1から始める</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
