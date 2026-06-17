"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence } from "motion/react";
import { Tabstag, SkillsByCategory } from "@/components/custom/SkillsElements";
import SkillCard from "@/components/custom/SkillCard";

const Skill = () => {
    return (
        <section
            id="skills"
            className="flex items-center justify-center min-h-screen mb-16 mt-4 px-4"
        >
            <Tabs defaultValue={Tabstag[0].value} className="w-full max-w-3xl gap-8">
                <TabsList variant={"line"} className="mx-auto">
                    {Tabstag.map((tag) => (
                        <TabsTrigger key={tag.value} value={tag.value}>
                            {tag.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {Tabstag.map((tag) => (
                    <TabsContent key={tag.value} value={tag.value}>
                        <AnimatePresence mode="wait">
                            <div
                                key={tag.value}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                            >
                                {SkillsByCategory[tag.value].map((skill, index) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </AnimatePresence>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};

export default Skill;