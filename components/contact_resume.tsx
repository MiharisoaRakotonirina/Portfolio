"use client";
import { useCurrentLocale, useI18n } from "@/locales/client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
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
                ? "Miharisoa_Rakotonirina_CV_EN.pdf"
                : "Miharisoa_Rakotonirina_CV_FR.pdf"
            }
            download={
              locale === "en"
                ? "Miharisoa_Rakotonirina_CV_EN"
                : "Miharisoa_Rakotonirina_CV_FR"
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
