"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import profilePic from "@/public/profile_image.png";
import { GraduationCap, Info, LocateFixed } from "lucide-react";
import { motion } from "motion/react";

type ProfileInfoProps = {
  title: string;
  icon: React.ReactNode;
};

export default function About() {
  const Topics: string[] = [
    "Web Development",
    "Cybersecurity",
    "Chess",
    "Traveling",
    "Music",
    "MotorSport",
  ];

  const ProfileInfo: ProfileInfoProps[] = [
    {
      title: "Madagascar",
      icon: <LocateFixed size={25} />,
    },
    {
      title: "Haute École d'Informatique (HEI)",
      icon: <GraduationCap size={25} />,
    },
    {
      title: "Available for work-study.",
      icon: <Info size={25} />,
    },
  ];

  return (
    <section
      id="about"
      className=" flex items-center justify-center bg-muted/30"
    >
      <div className="max-w-4xl  px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">About me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            Get to know me more &mdash; my journey, interests, and what fuels my
            passion for tech.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="max-w-xl">
                <CardHeader>
                  <CardTitle>My Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-justify">
                    I&apos;m a third-year Computer Science student at HEI,
                    driven by a passion for crafting innovative solutions
                    through code. My journey began with curiosity about
                    technology and has grown into a true love for development.
                  </p>
                  <p className="text-muted-foreground text-justify">
                    I&apos;m passionate about developing websites where users
                    feel comfortable, creating interfaces that are intuitive and
                    easy to navigate, focusing on both usability and design.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <Card className="max-w-xl">
                <CardHeader>
                  <CardTitle>Activities & Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Topics.map((topic: string, index: number) => {
                      return (
                        <Badge
                          key={index}
                          className="text-sm "
                          variant={"secondary"}
                        >
                          {topic}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div>
              <Card className="max-w-xl ">
                <CardHeader className="flex items-center justify-center rounded-full">
                  <Image
                    src={profilePic}
                    alt={"Miharisoa Rakotonirina"}
                    className="rounded-full max-w-3xs"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg text-center mb-4">
                    Miharisoa Rakotonirina
                  </CardTitle>
                  <CardDescription className="space-y-6 flex flex-col items-start">
                    {ProfileInfo.map(
                      (info: ProfileInfoProps, index: number) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <span className="text-orange-400">{info.icon}</span>
                            <span className="ml-2 text-muted-foreground">
                              {info.title}
                            </span>
                          </div>
                        );
                      }
                    )}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
