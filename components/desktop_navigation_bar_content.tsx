import React from "react";
import { Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Scroll from "@/lib/scrollTo";
import Link from "next/link";

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
      id: "#",
      label: "Contact",
      subMenu: [
        {
          id: "linkedin",
          label: "LinkedIn",
          icon: <Linkedin className="text-base" />,
          link: "https://www.linkedin.com/in/miharisoa-rakotonirina",
        },
        {
          id: "email",
          label: "Email",
          link: "mailto:miharisoa.rakotonirina.06@gmail.com",
          icon: <Mail className="text-base" />,
        },
        {
          id: "whatsapp",
          label: "WhatsApp",
          icon: <FaWhatsapp className="text-2xl" />,
          link: "https://wa.me/261320250500",
        },
        {
          id: "telegram",
          label: "Telegram",
          icon: <FaTelegramPlane className="text-2xl" />,
          link: "https://t.me/MIHARISOA_RAKOTONIRINA",
        },
        {
          id: "contact",
          label: "Send me a message",
          icon: <MessageCircleMore className="text-base" />,
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
          <NavigationMenu key={NavItem.id}>
            <NavigationMenuList className="cursor-pointer!">
              <NavigationMenuItem key={NavItem.id}>
                <NavigationMenuTrigger className="bg-transparent!">
                  {NavItem.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="space-x-8 w-[300px] space-y-4">
                    {NavItem.subMenu.map((subMenu: NavItemProps) => {
                      return (
                        <li
                          key={subMenu.id}
                          className="cursor-pointer flex flex-row items-center hover:bg-accent w-full! p-1"
                        >
                          <span className="border p-2 rounded-full bg-accent text-orange-400">
                            {subMenu.icon}
                          </span>
                          {subMenu.link ? (
                            <Link
                              href={subMenu.link}
                              target="_blank"
                              key={subMenu.id}
                            >
                              <span className="ml-5 text-sm">
                                {subMenu.label}
                              </span>
                            </Link>
                          ) : (
                            <span
                              className="ml-5 text-sm"
                              onClick={() => Scroll(subMenu.id)}
                            >
                              {subMenu.label}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        );
      })}
    </nav>
  );
}
