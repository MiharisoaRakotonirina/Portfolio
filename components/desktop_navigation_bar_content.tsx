import React from "react";
import { Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { Button } from "./ui/button";
import Scroll from "@/lib/scrollTo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type NavItemProps = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  link?: string;
  subMenu?: NavItemProps[];
};

export default function DesktopNavigationBarContent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const NavItems: NavItemProps[] = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "#",
      label: "Contact",
      subMenu: [
        {
          id: "linkedin",
          label: "LinkedIn",
          icon: <Linkedin className="w-5! h-5! text-orange-400" />,
          link: "https://www.linkedin.com/in/miharisoa-rakotonirina",
        },
        {
          id: "email",
          label: "Email",
          link: "mailto:miharisoa.rakotonirina.06@gmail.com",
          icon: <Mail className="w-6! h-6! text-orange-400" />,
        },
        {
          id: "whatsapp",
          label: "WhatsApp",
          icon: <FaWhatsapp className="w-6! h-6! text-orange-400" />,
          link: "https://wa.me/261320250500",
        },
        {
          id: "telegram",
          label: "Telegram",
          icon: <FaTelegramPlane className="w-6! h-6! text-orange-400" />,
          link: "https://t.me/MIHARISOA_RAKOTONIRINA",
        },
        {
          id: "contact",
          label: "Send me a message",
          icon: <MessageCircleMore className="w-6! h-6! text-orange-400" />,
        },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NavItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className="space-x-4 flex flex-row max-md:hidden">
      {NavItems.map((NavItem: NavItemProps) => {
        if (!NavItem.subMenu) {
          return (
            <Button
              variant={"ghost"}
              key={NavItem.id}
              onClick={() => Scroll(NavItem.id)}
              className={`transition-colors hover:text-primary cursor-pointer hover:bg-transparent! ${
                activeSection === NavItem.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {NavItem.label}
            </Button>
          );
        }

        return (
          <DropdownMenu key={NavItem.id} modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="cursor-pointer hover:bg-transparent!"
              >
                {NavItem.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px]">
              {NavItem.subMenu.map((subMenu: NavItemProps) => {
                return (
                  <DropdownMenuItem
                    key={subMenu.id}
                    className="cursor-pointer py-4"
                  >
                    <div className="flex items-center w-full">
                      {subMenu.link ? (
                        <Link
                          href={subMenu.link}
                          className="border p-2 rounded-full bg-accent text-orange-400!"
                          target="_blank"
                        >
                          <span>{subMenu.icon}</span>
                        </Link>
                      ) : (
                        <span
                          className="border p-2 rounded-full bg-accent text-orange-400!"
                          onClick={() => Scroll(subMenu.id)}
                        >
                          {subMenu.icon}
                        </span>
                      )}
                      {subMenu.link ? (
                        <Link
                          href={subMenu.link}
                          target="_blank"
                          className="ml-5 text-base w-full"
                        >
                          {subMenu.label}
                        </Link>
                      ) : (
                        <span
                          className="ml-5 text-base"
                          onClick={() => Scroll(subMenu.id)}
                        >
                          {subMenu.label}
                        </span>
                      )}
                    </div>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );
}
