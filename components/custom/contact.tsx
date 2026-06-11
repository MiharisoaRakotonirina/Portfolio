"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Github, Linkedin, Locate, Mail } from "lucide-react";
import HeroSocialNetworkComponent from "./hero_social_network";
import ContactForm from "./contact_form";
import ContactDetails, { ContactDetailsProps } from "./contact_details";
import { FaWhatsapp } from "react-icons/fa";
import ContactResume from "./contact_resume";
import { useI18n } from "@/locales/client";

type socialLinksProps = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

export default function Contact() {
  const t = useI18n();
  const socialLinks: socialLinksProps[] = [
    {
      icon: <Linkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/miharisoa-rakotonirina",
    },
    {
      icon: <Github />,
      title: "Github",
      link: "https://github.com/MiharisoaRakotonirina",
    },
  ];

  const contactDetails: ContactDetailsProps[] = [
    {
      icon: <Mail />,
      label: "Email",
      value: "miharisoa.rakotonirina.06@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      value: "+261 32 02 505 00",
    },
    {
      icon: <Locate />,
      label: t("contact.contactDetails.location"),
      value: "Madagascar, Antananarivo",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold sm:text-4xl mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12  min-w-0">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.contactForm.title")}</CardTitle>
              <CardDescription>
                {t("contact.contactForm.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8 min-w-0">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.contactDetails.title")}</CardTitle>
                <CardDescription>
                  {t("contact.contactDetails.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((contactDetail: ContactDetailsProps) => {
                  return (
                    <ContactDetails
                      icon={contactDetail.icon}
                      label={contactDetail.label}
                      value={contactDetail.value}
                      key={contactDetail.label}
                    />
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("contact.socialNetworks.title")}</CardTitle>
                <CardDescription>
                  {t("contact.socialNetworks.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((socialLink: socialLinksProps) => {
                    return (
                      <HeroSocialNetworkComponent
                        link={socialLink.link}
                        key={socialLink.title}
                        icon={socialLink.icon}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <ContactResume />
          </div>
        </div>
      </div>
    </section>
  );
}
