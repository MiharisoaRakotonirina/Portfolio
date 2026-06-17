"use client"

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import type { Skill } from "@/components/custom/SkillsElements";

type SkillCardProps = {
    skill: Skill;
    index: number;
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
            }}
        >
            <Card className="group transition-colors hover:border-orange-400 dark:hover:border-orange-400">
                <CardContent className="flex flex-col items-center justify-center gap-3 py-6">
                    <div className="text-6xl text-orange-600 dark:text-orange-400">
                        {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                        {skill.name}
                    </span>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SkillCard;