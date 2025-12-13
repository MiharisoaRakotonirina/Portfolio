"use client";

import React from "react";
import { Button } from "./ui/button";
import { Languages, LaptopMinimal, Moon, Settings, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd, KbdGroup } from "./ui/kbd";
import { useTheme } from "next-themes";

export default function PreferenceButton() {
  const { setTheme } = useTheme();

  const handleKeyPress = (
    event:
      | KeyboardEvent
      | React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;

    if (event instanceof KeyboardEvent) {
      if (
        eventTarget.tagName === "INPUT" ||
        eventTarget.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (event.key === "L" && event.shiftKey) {
        setTheme("light");
      }
      if (event.key === "D" && event.shiftKey) {
        setTheme("dark");
      }
      if (event.key === "S" && event.shiftKey) {
        setTheme("system");
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button
          className="fixed bottom-12 right-4 z-50 h-10 w-10 rounded-full flex items-center justify-center p-0! [&_svg]:size-5! cursor-pointer bg-primary/10 "
          aria-label="Settings"
          variant={"outline"}
        >
          <Settings className="text-orange-400" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-56 ml-20">
        <DropdownMenuLabel>Personal preferences</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="flex items-center justify-between cursor-pointer "
            onClick={() => setTheme("light")}
          >
            <span className="flex items-center gap-3">
              Light Mode
              <Sun />
            </span>
            <KbdGroup>
              <Kbd>SHIFT</Kbd>
              <span>+</span>
              <Kbd>L</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <span className="flex items-center gap-3.5  ">
              Dark Mode
              <Moon />
            </span>
            <KbdGroup>
              <Kbd>SHIFT</Kbd>
              <span>+</span>
              <Kbd>D</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setTheme("system")}
          >
            <span className="flex items-center gap-9  ">
              System
              <LaptopMinimal />
            </span>
            <KbdGroup>
              <Kbd>SHIFT</Kbd>
              <span>+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
            <span className="flex items-center gap-9.5">
              French
              <Languages />
            </span>
            <KbdGroup>
              <Kbd>SHIFT</Kbd>
              <span>+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
