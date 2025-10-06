import { Card, CardBody } from '@nextui-org/react';
import { missionContent } from '@/lib/content/static-content';

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="space-y-4">
          <h2 className="section-heading">みかわAI学校とは</h2>
          <p className="section-subheading">
            三河地域から「実務で使えるAI」を広げるための実践スクールです。経営者・会社員・主婦・学生まで、誰もが同じスタートで学べる場を目指します。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border border-slate-200/60 bg-white/95 shadow-sm">
            <CardBody className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Mission</h3>
              <p className="text-sm text-slate-600">{missionContent.mission}</p>
            </CardBody>
          </Card>
          <Card className="border border-slate-200/60 bg-white/95 shadow-sm">
            <CardBody className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Vision</h3>
              <p className="text-sm text-slate-600">{missionContent.vision}</p>
            </CardBody>
          </Card>
          <Card className="border border-slate-200/60 bg-white/95 shadow-sm">
            <CardBody className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">Concept</h3>
              <p className="text-sm text-slate-600">{missionContent.concept}</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
