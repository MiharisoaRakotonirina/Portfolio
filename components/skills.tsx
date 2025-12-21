import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { getI18n } from "@/locales/server";

export default async function Skills() {
  const t = await getI18n();

  const ProgrammingLanguages: string[] = ["JavaScript", "TypeScript", "SQL"];
  const Frameworks: string[] = ["React", "Next.js", "Tailwind CSS"];
  const DevelopmentTools: string[] = ["VS Code", "Git", "GitHub", "Linux"];

  return (
    <section
      id="skills"
      className="flex items-center justify-center min-h-screen mb-16 mt-4"
    >
      <div className="max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            {t("skills.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("skills.cards.programmingLanguagesTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap  gap-2">
                {ProgrammingLanguages.map((lang, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("skills.cards.frameworkAndLibrariesTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Frameworks.map((framework, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {t("skills.cards.devToolsTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {DevelopmentTools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
