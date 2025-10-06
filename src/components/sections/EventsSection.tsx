import { Button, Card, CardBody, CardFooter, Chip } from '@nextui-org/react';
import NextLink from 'next/link';
import { upcomingEvents } from '@/lib/content/static-content';

export function EventsSection() {
  return (
    <section id="events" className="bg-surface">
      <div className="section-container gap-10 lg:flex lg:items-start lg:gap-12">
        <div className="flex-1 space-y-4">
          <div className="space-y-4">
            <h2 className="section-heading">最新イベント</h2>
            <p className="section-subheading">
              公開セミナーや少人数ハンズオンなど、最新の開催情報を更新中です。
            </p>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border border-slate-200/60 bg-white/95 shadow-sm">
                <CardBody className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip color="primary" variant="flat" size="sm" className="bg-primary/10 text-primary">
                      {event.format}
                    </Chip>
                    <span className="text-xs text-slate-500">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </CardBody>
                <CardFooter className="flex justify-end border-t border-slate-200/60">
                  <Button
                    as={NextLink}
                    href="#contact"
                    variant="flat"
                    color="primary"
                    radius="full"
                    className="bg-primary/10 text-primary"
                  >
                    参加申し込み
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <aside className="flex w-full max-w-md flex-none flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white/95 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Google Calendar</h3>
          <p className="text-sm text-slate-600">
            公開セミナーの予定をGoogleカレンダーで共有予定です。準備中のためしばらくお待ちください。
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-100/60">
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Google Calendar 埋め込み準備中
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
