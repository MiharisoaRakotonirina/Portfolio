"use client";

import React from "react";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
  SheetFooter,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { X, Menu, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { NavItemProps } from "./desktop_navigation_bar_content";
import { useI18n } from "@/locales/client";
import { motion, AnimatePresence, easeOut } from "motion/react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Scroll from "@/lib/scrollTo";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const linkHoverVariants = {
  rest: {
    scale: 1,
    x: 0,
    transition: { duration: 0.2, ease: easeOut },
  },
  hover: {
    scale: 1.02,
    x: 4,
    transition: { duration: 0.2, ease: easeOut },
  },
};

export default function MobileNavigationBar() {
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu((prevState: boolean) => !prevState);
  };

  const t = useI18n();

  const NavItems: NavItemProps[] = [
    {
      id: "home",
      label: t("navigationBar.home"),
    },
    {
      id: "about",
      label: t("navigationBar.about"),
    },
    {
      id: "skills",
      label: t("navigationBar.skills"),
    },
    {
      id: "projects",
      label: t("navigationBar.projects"),
    },
    {
      id: "experience",
      label: t("navigationBar.experience"),
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const SocialNetworksItems: NavItemProps[] = [
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
      label: t("navigationBar.contact.subLink"),
      icon: <MessageCircleMore className="w-6! h-6! text-orange-400" />,
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
  }, [NavItems]);

  return (
    <nav className="md:hidden">
      <Sheet
        modal={false}
        open={openMobileMenu}
        onOpenChange={handleOpenMobileMenu}
      >
        <SheetTrigger asChild className="cursor-pointer">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="cursor-pointer">
              {openMobileMenu ? <X /> : <Menu />}
            </Button>
          </motion.div>
        </SheetTrigger>

        <AnimatePresence>
          {openMobileMenu && (
            <SheetContent side="left" className="pt-8">
              <motion.div
                className="relative z-40 flex text-muted-foreground h-full shrink-0 flex-col transition-all"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ul className="flex h-full flex-col">
                  <div className="flex grow flex-col items-center">
                    <div className="flex h-full w-full flex-col">
                      <div className="flex grow flex-col gap-4">
                        <ScrollArea className="h-16 grow p-2">
                          <motion.div
                            className={cn("flex w-full flex-col gap-3")}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {/* Navigation Items */}
                            {NavItems.map((navItem: NavItemProps) => (
                              <motion.div
                                key={navItem.id}
                                variants={itemVariants}
                              >
                                <div
                                  onClick={() => {
                                    Scroll(navItem.id);
                                    setOpenMobileMenu(false);
                                  }}
                                  className={cn(
                                    "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary cursor-pointer",
                                    activeSection === navItem.id &&
                                      "bg-muted dark:text-amber-400 text-orange-500"
                                  )}
                                >
                                  <motion.div
                                    className="flex h-8 w-full flex-row items-center"
                                    variants={linkHoverVariants}
                                    initial="rest"
                                    whileHover="hover"
                                  >
                                    <li>
                                      <p className="text-sm font-medium">
                                        {navItem.label}
                                      </p>
                                    </li>
                                  </motion.div>
                                </div>
                              </motion.div>
                            ))}

                            {/* Separator */}
                            <motion.div
                              variants={itemVariants}
                              className="w-full mt-4 mb-4"
                            >
                              <Separator className="w-full bg-border" />
                            </motion.div>

                            {/* Social Networks */}
                            {SocialNetworksItems.map(
                              (social: NavItemProps, index) => (
                                <motion.div
                                  key={social.id}
                                  variants={itemVariants}
                                  className="mb-4"
                                >
                                  {/* Les 4 premiers : avec Link de Next.js */}
                                  {index < 4 && social.link ? (
                                    <Link
                                      href={social.link}
                                      target="_blank"
                                      onClick={() => setOpenMobileMenu(false)}
                                      className={cn(
                                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary"
                                      )}
                                    >
                                      <motion.div
                                        className="flex h-8 w-full flex-row items-center"
                                        variants={linkHoverVariants}
                                        initial="rest"
                                        whileHover="hover"
                                      >
                                        <motion.div
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          {social.icon}
                                        </motion.div>
                                        <li>
                                          <p className="ml-2 text-sm font-medium">
                                            {social.label}
                                          </p>
                                        </li>
                                      </motion.div>
                                    </Link>
                                  ) : (
                                    /* Le dernier : Contact avec Scroll */
                                    <div
                                      onClick={() => {
                                        Scroll(social.id);
                                        setOpenMobileMenu(false);
                                      }}
                                      className={cn(
                                        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary cursor-pointer"
                                      )}
                                    >
                                      <motion.div
                                        className="flex h-8 w-full flex-row items-center"
                                        variants={linkHoverVariants}
                                        initial="rest"
                                        whileHover="hover"
                                      >
                                        <motion.div
                                          whileHover={{ scale: 1.1, rotate: 5 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          {social.icon}
                                        </motion.div>
                                        <li>
                                          <p className="ml-2 text-sm font-medium">
                                            {social.label}
                                          </p>
                                        </li>
                                      </motion.div>
                                    </div>
                                  )}
                                </motion.div>
                              )
                            )}
                          </motion.div>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </ul>
              </motion.div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          )}
        </AnimatePresence>
      </Sheet>
    </nav>
  );
}
