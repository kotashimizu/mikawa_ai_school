'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { faqData } from '@/lib/content/static-content';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 bg-[#F0F1F3]" id="faq">
      <div className="container mx-auto px-6 sm:px-10 max-w-[1000px]">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(24px,6vw,48px)] md:text-5xl font-bold text-[var(--color-primary)] mb-6 px-4 leading-tight">
            よくある質問
          </h2>
        </div>

        {/* FAQ リスト */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-base md:text-lg font-bold text-[var(--color-primary)] pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-6 h-6 flex-shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
                      <p className="text-sm md:text-base text-[var(--color-text)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[#15395A] font-bold transition-colors duration-300"
          >
            <span>その他の質問をする</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
