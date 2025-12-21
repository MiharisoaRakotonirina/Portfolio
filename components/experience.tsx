"use client";
import { useCurrentLocale, useI18n } from "@/locales/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar, Clock, LocateIcon, School } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function Experience() {
  const t = useI18n();
  const locale = useCurrentLocale();
  return (
    <section
      id="experience"
      className="flex items-center flex-col justify-center mb-16"
    >
      <div className="max-w-4xl px-4 mx-auto flex flex-col items-center justify-center min-h-screen w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            {t("experience.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 w-full">
          <div>
            <span className="flex items-center gap-4 mb-4">
              <School className="text-orange-400" size={32} />
              <h2 className="text-lg">{t("experience.academicPath.title")}</h2>
            </span>
            <Card>
              <CardHeader>
                <CardTitle>{t("experience.academicPath.cardTitle")}</CardTitle>
                <CardDescription>
                  Haute Ecole d'Informatique ( HEI )
                </CardDescription>
                <div className="flex flex-row items-center gap-8 mt-4 max-sm:flex-col max-sm:items-start">
                  <CardDescription className="flex flex-row items-center gap-3">
                    <Calendar />
                    2023 - 2026 {locale === "en" ? "(expected)" : "(attendu)"}
                  </CardDescription>
                  <CardDescription className="flex flex-row items-center gap-3">
                    <LocateIcon />
                    Madagascar
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <span className="font-bold!">
                    {locale === "en"
                      ? "Relevant coursework:"
                      : "Cours associés: "}
                  </span>{" "}
                  {t("experience.academicPath.courseSubject")}
                </CardDescription>
                <div className="h-4"></div>
              </CardContent>
            </Card>
          </div>
          <div>
            <span className="flex items-center gap-4 mb-4">
              <FaUserTie className="text-3xl text-orange-400" />
              <h2 className="text-lg">
                {t("experience.professionalPath.title")}
              </h2>
            </span>
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("experience.professionalPath.cardTitle")}
                </CardTitle>
                <CardDescription>
                  {t("experience.professionalPath.cardSubtitle")}
                </CardDescription>
                <CardDescription className="flex flex-row items-center gap-3 mt-4">
                  <Clock />
                  {t("experience.professionalPath.cardDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>
                    {t(
                      "experience.professionalPath.cardContent.firstDescription"
                    )}{" "}
                    <strong>
                      {t(
                        "experience.professionalPath.cardContent.postDescription"
                      )}
                    </strong>{" "}
                    (React JS, TypeScript)
                  </li>
                  <li>
                    {t(
                      "experience.professionalPath.cardContent.secondDescription"
                    )}{" "}
                    <strong>
                      {t("experience.professionalPath.cardContent.schedule")}
                    </strong>
                  </li>
                  <li>
                    {t(
                      "experience.professionalPath.cardContent.lastDescription"
                    )}{" "}
                    <strong>
                      {t(
                        "experience.professionalPath.cardContent.firstCondition"
                      )}
                    </strong>{" "}
                    {t("experience.professionalPath.cardContent.keyword")}{" "}
                    <strong>
                      {t(
                        "experience.professionalPath.cardContent.lastCondition"
                      )}
                    </strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
