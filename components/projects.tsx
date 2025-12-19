"use client";

import { motion } from "motion/react";
import ProjectCard from "./project_card";
import { useI18n } from "@/locales/client";

export default function Project() {
  const t = useI18n();

  const images: string[] = [
    "/explore_the_world/img_1.jpg",
    "/explore_the_world/img_2.jpg",
    "/explore_the_world/img_3.jpeg",
    "/explore_the_world/img_4.jpg",
  ];
  const techStack: string[] = ["HTML", "CSS"];

  const secondProject: string[] = [
    "/tapakila/event1.jpg",
    "/tapakila/event2.jpg",
    "/tapakila/event3.jpg",
    "/tapakila/event4.jpg",
  ];

  const secondProjectStack: string[] = [
    "React",
    "Next JS",
    "React Admin",
    "Tailwind CSS",
    "Express",
  ];

  return (
    <section className="bg-muted/30 mb-16 p-4" id="projects">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">{t("projects.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 w-full ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={"Explore The World"}
              description={t("projects.firstProject.description")}
              technologies={techStack}
              images={images}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <ProjectCard
              title={"Tapakila"}
              description={t("projects.secondProject.description")}
              technologies={secondProjectStack}
              images={secondProject}
              isFeatured={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
