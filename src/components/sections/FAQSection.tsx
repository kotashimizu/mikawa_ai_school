'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import { faqItems } from '@/lib/content/static-content';

export function FAQSection() {
  return (
    <section id="faq" className="bg-surface">
      <div className="section-container gap-6">
        <div className="space-y-4">
          <h2 className="section-heading">よくある質問</h2>
          <p className="section-subheading">
            参加前によくいただく質問をまとめました。ご不明点がありましたらお気軽にお問い合わせください。
          </p>
        </div>
        <Accordion variant="splitted" className="w-full">
          {faqItems.map((faq) => (
            <AccordionItem key={faq.id} title={faq.question} aria-label={faq.question} className="text-sm">
              <p className="text-sm text-slate-600">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
