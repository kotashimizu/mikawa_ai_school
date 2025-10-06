import { campusLife } from '@/lib/content/static-content';

export function CommunityStoriesSection() {
  return (
    <section className="section-split section-split--warm" id="community">
      <div className="section-container">
        <div className="section-card space-y-6">
          <div className="section-header">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Community</p>
            <h2 className="section-heading">みんなで分かち合う小さな気づき</h2>
            <p className="section-subheading">
              勉強会で生まれた「やってみた」を共有したり、気軽に相談し合えるのも少人数ならではの魅力です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {campusLife.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-6 text-left shadow-[0_12px_24px_rgba(15,25,55,0.06)]"
              >
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
