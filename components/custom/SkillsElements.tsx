"use client"
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
    SiNextdotjs,
    SiNestjs,
    SiPostgresql,
    SiPrisma,
    SiWebstorm,
    SiKalilinux,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const Tabstag = [
    {
        value: "frontend",
        title: "Frontend",
    },
    {
        value: "backend",
        title: "Backend",
    },
    {
        value: "devTools",
        title: "DevTools",
    },
];

export type Skill = {
    name: string;
    icon: React.ReactNode;
};


export const SkillsByCategory: Record<string, Skill[]> = {
    frontend: [
        { name: "React JS", icon: <FaReact /> },
        { name: "React Native", icon: <TbBrandReactNative /> },
        { name: "Next JS", icon: <SiNextdotjs /> },
        { name: "Typescript", icon: <BiLogoTypescript /> },
    ],
    backend: [
        { name: "Nest JS", icon: <SiNestjs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Typescript", icon: <BiLogoTypescript /> },
    ],
    devTools: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Github", icon: <FaGithub /> },
        { name: "WebStorm", icon: <SiWebstorm /> },
        { name: "Kali Linux", icon: <SiKalilinux /> },
    ],
};