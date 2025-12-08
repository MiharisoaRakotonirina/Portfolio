import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <form className="space-y-8 overflow-hidden">
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
        <div className="space-y-2 flex-1 min-w-0">
          <Label>Name</Label>
          <Input type="text" className="w-full" placeholder={"Your name"} />
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <Label>Email</Label>
          <Input
            type="email"
            className="w-full"
            placeholder={"your.email@example.com"}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Subject</Label>
        <Input
          type="text"
          className="w-full"
          placeholder="What would you like to discuss?"
        />
      </div>

      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea
          className="w-full resize-none h-40"
          placeholder={"Tell me about your project or just say 👋"}
        />
      </div>

      <Button type="submit" className="w-full cursor-pointer">
        Send Message
      </Button>
    </form>
  );
}
