import { aboutIntro } from '@/lib/content/static-content';

export function AboutOverviewSection() {
  return (
    <section className="section-split section-split--cool" id="about">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About</p>
            <h2 className="section-heading">{aboutIntro.title}</h2>
            <p className="section-subheading">{aboutIntro.body}</p>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            {aboutIntro.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
