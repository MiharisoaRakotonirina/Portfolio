"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [informations, setInformations] = React.useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInformations((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "b9e2a973-683b-4ff3-896e-cce46d4cebf8");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!", {
        position: "bottom-right",
        duration: 1500,
        description: "Thanks for reaching out. I'll get back to you soon.",
        closeButton: true,
      });
      setInformations({
        fullName: "",
        emailAddress: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Ooops!", {
        position: "bottom-right",
        duration: 1500,
        description:
          "There is an error sending your message. Please try again later",
      });
    }
  };
  return (
    <form className="space-y-8 overflow-hidden" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
        <div className="space-y-2 flex-1 min-w-0">
          <Label>Name</Label>
          <Input
            type="text"
            className="w-full"
            placeholder={"Your name"}
            onChange={handleChange}
            required={true}
            name="fullName"
            value={informations.fullName}
          />
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <Label>Email</Label>
          <Input
            type="email"
            className="w-full"
            placeholder={"your.email@example.com"}
            onChange={handleChange}
            required={true}
            name="emailAddress"
            value={informations.emailAddress}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Subject</Label>
        <Input
          type="text"
          className="w-full"
          placeholder="What would you like to discuss?"
          onChange={handleChange}
          required={true}
          name="subject"
          value={informations.subject}
        />
      </div>

      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea
          className="w-full resize-none h-52"
          placeholder={"Tell me about your project or just say 👋"}
          onChange={handleChange}
          required={true}
          name="message"
          value={informations.message}
        />
      </div>

      <Button className="w-full cursor-pointer">Send Message</Button>
    </form>
  );
}
