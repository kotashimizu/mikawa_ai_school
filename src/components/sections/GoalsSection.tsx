import { goalChips } from '@/lib/content/static-content';

export function GoalsSection() {
  return (
    <section id="goals" className="section-split section-split--cool" aria-labelledby="goals-heading">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Goals</p>
            <h2 id="goals-heading" className="section-heading">
              こんな気持ちに寄りそいます
            </h2>
            <p className="section-subheading">
              気になるテーマをタップすると、スタッフがおすすめの参加方法をお伝えします。
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {goalChips.map((goal) => (
              <span
                key={goal}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
