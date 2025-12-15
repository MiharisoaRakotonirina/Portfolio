"use client";

import { motion } from "motion/react";
import ProjectCard from "./project_card";

export default function Project() {
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
          <h2 className="text-3xl mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            A showcase of my recent work, demonstrating my skills in front-end
            development and web technologies.
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
              description={
                "My first website, created for an exam, using HTML and CSS to showcase locations in Madagascar and beyond."
              }
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
              description={
                "This site is designed to manage ticket sales for events efficiently, such as a show."
              }
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
