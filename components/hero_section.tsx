"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import HeroSocialNetworkComponent, {
  HeroSocialNetworkProps,
} from "./hero_social_network";
import { TextEffect } from "./motion-primitives/text-effect";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import Scroll from "@/lib/scrollTo";

export default function HeroSection() {
  const socialNetworks: HeroSocialNetworkProps[] = [
    {
      link: "https://github.com/MiharisoaRakotonirina",
      icon: <Github className="text-base" />,
    },
    {
      link: "https://www.linkedin.com/in/miharisoa-rakotonirina",
      icon: <Linkedin className="text-base" />,
    },
    {
      link: "mailto:miharisoa.rakotonirina.06@gmail.com",
      icon: <Mail className="text-base" />,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-background to-muted/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TextEffect
          className="text-7xl mb-4"
          per="char"
          delay={0.5}
          variants={{
            container: {
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                rotateX: 90,
                y: 10,
              },
              visible: {
                opacity: 1,
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            },
          }}
        >
          Hi, I&apos;m John Doe
        </TextEffect>
        <TextEffect
          per="char"
          delay={1.5}
          className="text-2xl text-muted-foreground"
        >
          Front-End Developer
        </TextEffect>
        <TextEffect
          per="char"
          delay={2.5}
          className="pt-8 text-lg text-muted-foreground max-w-2xl mx-auto"
          preset="blur"
        >
          An enthusiastic computer science student focused on crafting
          delightful front-end experiences. Now in my third year, exploring bold
          ideas and expanding creative possibilities in tech.
        </TextEffect>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 5,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <Button
              size={"lg"}
              className="cursor-pointer"
              onClick={() => Scroll("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <Button
              variant={"outline"}
              size={"lg"}
              className="cursor-pointer"
              onClick={() => Scroll("about")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-center space-x-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 6,
              },
            },
          }}
        >
          {socialNetworks.map(
            (network: HeroSocialNetworkProps, index: number) => {
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <HeroSocialNetworkComponent
                    key={index}
                    link={network.link}
                    icon={network.icon}
                  />
                </motion.div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}
