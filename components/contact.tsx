import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Link, Linkedin, Locate, Mail } from "lucide-react";
import HeroSocialNetworkComponent from "./hero_social_network";
import ContactForm from "./contact_form";
import ContactDetails, { ContactDetailsProps } from "./contact_details";
import { FaWhatsapp } from "react-icons/fa";
import ContactResume from "./contact_resume";

type socialLinksProps = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

export default function Contact() {
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
      label: "Location",
      value: "Madagascar, Antananarivo",
    },
  ];

  return (
    <section id="contact" className="bg-muted/30 py-16">
      <div className="max-w-4xl px-4 mx-auto flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">Let&apos;s connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-center mx-auto">
            I&apos;m always eager to discuss new opportunities, dive into
            interesting projects, or simply chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-md:mx-10">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Note</CardTitle>
                <CardDescription>
                  Complete the form below and I will reply shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          <div className="lg:space-y-2 space-y-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Details</CardTitle>
                  <CardDescription>
                    Don't hesitate to contact me via any of these methods
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactDetails.map(
                      (contactDetail: ContactDetailsProps) => {
                        return (
                          <ContactDetails
                            icon={contactDetail.icon}
                            label={contactDetail.label}
                            value={contactDetail.value}
                            key={contactDetail.label}
                          />
                        );
                      }
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Follow me</CardTitle>
                  <CardDescription>
                    Connect with me on social network and check my latest work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-x-4">
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
            </div>
            <div>
              <ContactResume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
