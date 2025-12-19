import { getI18n } from "@/locales/server";
import Link from "next/link";

export default async function Footer() {
  const t = await getI18n();

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
