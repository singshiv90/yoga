"use client";

import { Clock, Video, MapPin } from "lucide-react";
import { classSchedule } from "@/lib/programs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";

export function ClassSchedule() {
  return (
    <section id="op-schedule" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          variant="gold"
          kicker="Class Schedule"
          title={
            <>
              Pick a Time That{" "}
              <span className="text-gradient-gold">Fits Your Life</span>
            </>
          }
          subtitle={`Classes run ${classSchedule.days}. Choose any batch — switch anytime.`}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
          {classSchedule.groups.map((group) => (
            <div key={group.title} className="glass rounded-3xl p-8">
              <h3 className="text-center text-xl font-semibold">
                {group.title}
              </h3>

              {/* Platform badge */}
              <div className="mt-3 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
                  {group.platform === "Live via Zoom" ? (
                    <Video className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {group.platform}
                </span>
              </div>

              <StaggerGroup className="mt-6 grid gap-4">
                {group.slots.map((slot) => (
                  <div
                    key={slot.time}
                    className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-lg font-semibold">{slot.time}</p>
                      <p className="text-sm text-muted">{slot.label}</p>
                    </div>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
