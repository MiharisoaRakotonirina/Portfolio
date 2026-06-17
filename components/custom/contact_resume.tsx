"use client";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Download } from "lucide-react";

export default function ContactResume() {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <Card>
      <CardContent>
        <div className="text-center">
          <h4 className="mb-2">{t("contact.resume.title")}</h4>
          <a
            href={
              locale === "en"
                ? "CV_EN_Miharisoa_Rakotonirina.pdf"
                : "CV_FR_Miharisoa_Rakotonirina.pdf"
            }
            download={
              locale === "en"
                ? "CV_EN_Miharisoa_Rakotonirina"
                : "CV_FR_Miharisoa_Rakotonirina"
            }
          >
            <Button variant={"outline"} className="cursor-pointer">
              <span>
                <Download />
              </span>
              <span>{t("contact.resume.buttonContent")}</span>
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
