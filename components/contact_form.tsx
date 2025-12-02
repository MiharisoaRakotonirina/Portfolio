import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <form className="space-y-8  overflow-hidden">
      <div className="flex lg:flex-row flex-col  gap-8">
        <div className="space-y-4 ">
          <Label>Name</Label>
          <Input type="text" placeholder={"Your name"} />
        </div>
        <div className="space-y-4">
          <Label>Email</Label>
          <Input type="email" placeholder={"your.email@example.com"} />
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <Label>Subject</Label>
          <Input type="text" />
        </div>
      </div>
      <div className="space-y-4 overflow-hidden!">
        <Label>Message</Label>
        <Textarea
          placeholder={"Tell me about your project or just say 👋"}
          className="overflow-x-hidden   resize-none h-40 w-full"
        />
      </div>
      <Button type="submit" className="w-full cursor-pointer ">
        Send Message
      </Button>
    </form>
  );
}
