"use client";

import { motion } from "framer-motion";
import { Clock, Video } from "lucide-react";
import { classSchedule } from "@/lib/online-program-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";

export function ClassSchedule() {
  return (
    <section id="op-schedule" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          variant="teal"
          kicker="Class Schedule"
          title={
            <>
              Pick a Time That{" "}
              <span className="text-gradient-teal">Fits Your Life</span>
            </>
          }
          subtitle={`Classes run ${classSchedule.days}. Choose any batch — switch anytime.`}
        />

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {classSchedule.slots.map((slot) => (
            <motion.div
              key={slot.time}
              variants={staggerItem}
              className="glass flex items-center gap-4 rounded-2xl p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/12 text-teal">
                <Clock className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <p className="text-lg font-semibold">{slot.time}</p>
                <p className="text-sm text-muted">{slot.label}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* Platform badge */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-5 py-2.5 text-sm font-medium text-teal">
            <Video className="h-4 w-4" aria-hidden />
            {classSchedule.platform}
          </span>
        </div>
      </div>
    </section>
  );
}
