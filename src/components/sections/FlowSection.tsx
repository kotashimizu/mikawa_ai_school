import { Card, CardBody } from '@nextui-org/react';
import { flowSteps } from '@/lib/content/static-content';

export function FlowSection() {
  return (
    <section id="flow" className="bg-white">
      <div className="section-container">
        <div className="space-y-4">
          <h2 className="section-heading">参加の流れ</h2>
          <p className="section-subheading">
            招集型プログラムと公開セミナー、それぞれの参加方法をご紹介します。
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(flowSteps).map(([category, steps]) => (
            <Card key={category} className="border border-slate-200/60 bg-white/95 shadow-sm">
              <CardBody className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{category}</h3>
                  <p className="text-sm text-slate-500">3ステップで参加できます。</p>
                </div>
                <ol className="space-y-4">
                  {steps.map((step) => (
                    <li key={step.id} className="flex gap-4">
                      <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {step.id}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-slate-800">{step.title}</h4>
                        <p className="text-sm text-slate-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
