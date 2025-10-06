import { ContactSection } from '@/components/sections/ContactSection';
import { GoalsSection } from '@/components/sections/GoalsSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { AboutOverviewSection } from '@/components/sections/AboutOverviewSection';
import { SessionsShowcaseSection } from '@/components/sections/SessionsShowcaseSection';
import { LearningStylesSection } from '@/components/sections/LearningStylesSection';
import { CommunityStoriesSection } from '@/components/sections/CommunityStoriesSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutOverviewSection />
      <SessionsShowcaseSection />
      <LearningStylesSection />
      <CommunityStoriesSection />
      <GoalsSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
