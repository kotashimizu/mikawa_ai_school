import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SessionsShowcaseSection } from '@/components/sections/SessionsShowcaseSection';
import { LearningStylesSection } from '@/components/sections/LearningStylesSection';
import { CommunityStoriesSection } from '@/components/sections/CommunityStoriesSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SessionsShowcaseSection />
      <LearningStylesSection />
      <CommunityStoriesSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
