import { Card, CardBody } from '@nextui-org/react';
import { principalProfile } from '@/lib/content/static-content';

export function PrincipalSection() {
  return (
    <section id="principal" className="bg-white">
      <div className="section-container gap-10 lg:flex lg:items-center lg:gap-12">
        <div className="relative flex w-full max-w-sm flex-none items-center justify-center overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/20 p-12 text-center lg:max-w-md">
          <span className="text-lg font-semibold text-primary">写真準備中</span>
        </div>
        <Card className="flex-1 border border-slate-200/60 bg-white/95 shadow-sm">
          <CardBody className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">学長紹介</p>
              <h2 className="text-3xl font-bold text-slate-900">{principalProfile.name}</h2>
              <p className="text-sm text-slate-500">{principalProfile.title}</p>
            </div>
            <p className="text-sm text-slate-600">{principalProfile.introduction}</p>
            <blockquote className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-slate-700">
              “{principalProfile.message}”
            </blockquote>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
