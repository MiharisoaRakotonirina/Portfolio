"use client";

import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function Footer() {
  const t = useI18n();

  return (
    <div className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">{t("footer.description")}</p>
          <Link
            className="text-muted-foreground text-sm pt-4"
            href={"https://whois-radiantwizard.vercel.app/"}
            target="_blank"
          >
            {t("footer.inspiration")}
          </Link>
        </div>
      </div>
    </div>
  );
}
