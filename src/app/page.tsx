import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { PrincipalIntroSection } from '@/components/sections/PrincipalIntroSection';
import { LearningFlowSection } from '@/components/sections/LearningFlowSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. ヒーロー */}
      <HeroSection />

      {/* 2. プログラム一覧（3つの講座） */}
      <ProgramsSection />

      {/* 3. 学長紹介（簡易版） */}
      <PrincipalIntroSection />

      {/* 4. 特徴（4つの理由） */}
      <AboutSection />

      {/* 5. 学習の流れ */}
      <LearningFlowSection />

      {/* 6. FAQ */}
      <FAQSection />

      {/* 7. ニュース */}
      <NewsSection />

      {/* 8. CTA（お問い合わせ） */}
      <ContactSection />
    </div>
  );
}
