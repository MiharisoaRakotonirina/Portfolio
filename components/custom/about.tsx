"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import profilePic from "@/public/profile_image.png";
import { GraduationCap, Info, LocateFixed } from "lucide-react";
import { motion } from "motion/react";
import { useCurrentLocale, useI18n } from "@/locales/client";

type ProfileInfoProps = {
  title: string;
  icon: React.ReactNode;
};

export default function About() {
  const t = useI18n();
  const locale = useCurrentLocale();

  const Topics: string[] = [
    "Web Development",
    "Cybersecurity",
    "Chess",
    "Traveling",
    "Music",
    "MotorSport",
  ];

  const Sujets: string[] = [
    "Développement Web",
    "Cybersécurité",
    "Échecs",
    "Voyages",
    "Musique",
    "Sport automobile",
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
      title:
        locale === "en"
          ? "Available for work-study."
          : "Disponible pour un stage ou une alternance.",
      icon: <Info size={25} />,
    },
  ];

  return (
    <section
      id="about"
      className=" flex items-center justify-center bg-muted/30 min-h-screen"
    >
      <div className="max-w-4xl  px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">{t("about.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            {t("about.description")}
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
              <Card>
                <CardHeader>
                  <CardTitle>{t("about.backgroundCard.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-justify">
                    {t("about.backgroundCard.firstParagraph")}
                  </p>
                  <p className="text-muted-foreground text-justify">
                    {t("about.backgroundCard.secondParagraph")}
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
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t("about.activitiesAndInterestsCard.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {locale === "en" ? (
                      <>
                        {Topics.map((topic: string, index: number) => {
                          return (
                            <Badge
                              key={index}
                              className="text-sm font-normal"
                              variant={"secondary"}
                            >
                              {topic}
                            </Badge>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {Sujets.map((sujet: string, index: number) => {
                          return (
                            <Badge
                              key={index}
                              className="text-sm font-normal"
                              variant={"secondary"}
                            >
                              {sujet}
                            </Badge>
                          );
                        })}
                      </>
                    )}
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
              <Card>
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
                      },
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
