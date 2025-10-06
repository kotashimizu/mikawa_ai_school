import { Card, CardBody } from '@nextui-org/react';
import { usecaseCards } from '@/lib/content/static-content';

export function UsecasesSection() {
  return (
    <section id="usecases" className="bg-surface">
      <div className="section-container">
        <div className="space-y-4">
          <h2 className="section-heading">AI活用で広がる利用シーン</h2>
          <p className="section-subheading">
            仕事から暮らしまで、みかわAI学校が提供するプログラムで叶えられるユースケースをご紹介します。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {usecaseCards.map((card) => (
            <Card key={card.id} className="border border-slate-200/60 bg-white/95 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card">
              <CardBody className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
