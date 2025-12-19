"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { createContactScheme } from "@/lib/validation/contact_scheme";
import { useI18n } from "@/locales/client";

export default function ContactForm() {
  const t = useI18n();
  const contactScheme = React.useMemo(() => createContactScheme(t), [t]);

  const [informations, setInformations] = React.useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isValid, setIsValid] = React.useState(false);
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  React.useEffect(() => {
    const result = contactScheme.safeParse(informations);

    if (result.success) {
      setErrors({});
      setIsValid(true);
    } else {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      setIsValid(false);
    }
  }, [informations, contactScheme]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInformations((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parseFormResult = contactScheme.safeParse(informations);

    if (!parseFormResult.success) {
      toast.error("Please fill the form correctly");
      setTouched({
        fullName: true,
        emailAddress: true,
        subject: true,
        message: true,
      });
    }

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
      toast.success(t("contact.contactForm.successfullySendToast.title"), {
        position: "bottom-right",
        duration: 2500,
        description: t("contact.contactForm.successfullySendToast.description"),
        closeButton: true,
      });
      setInformations({
        fullName: "",
        emailAddress: "",
        subject: "",
        message: "",
      });
      setTouched({
        fullName: false,
        emailAddress: false,
        subject: false,
        message: false,
      });
    } else {
      toast.error(t("contact.contactForm.failSendingToast.title"), {
        position: "bottom-right",
        duration: 2500,
        description: t("contact.contactForm.failSendingToast.description"),
      });
    }
  };

  return (
    <form className="space-y-8 overflow-hidden" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
        <div className="space-y-2 flex-1 min-w-0">
          <Label>{t("contact.contactForm.fields.label.name")}</Label>
          <Input
            onBlur={handleBlur}
            type="text"
            className={`w-full ${
              touched.fullName && errors.fullName ? "border-destructive" : ""
            }`}
            placeholder={t("contact.contactForm.fields.placeholder.name")}
            onChange={handleChange}
            required={true}
            name="fullName"
            value={informations.fullName}
          />
          <div className="h-2">
            {touched.fullName && errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2 flex-1 min-w-0">
          <Label>Email</Label>
          <Input
            onBlur={handleBlur}
            type="email"
            className={`w-full ${
              touched.emailAddress && errors.emailAddress
                ? "border-destructive"
                : ""
            }`}
            placeholder={t("contact.contactForm.fields.placeholder.email")}
            onChange={handleChange}
            required={true}
            name="emailAddress"
            value={informations.emailAddress}
          />
          <div className="h-2">
            {touched.emailAddress && errors.emailAddress && (
              <p className="text-sm text-destructive">{errors.emailAddress}</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t("contact.contactForm.fields.label.subject")}</Label>
        <Input
          onBlur={handleBlur}
          type="text"
          className={`w-full ${
            touched.subject && errors.subject ? "border-destructive" : ""
          }`}
          placeholder={t("contact.contactForm.fields.placeholder.subject")}
          onChange={handleChange}
          required={true}
          name="subject"
          value={informations.subject}
        />
        <div className="h-2">
          {touched.subject && errors.subject && (
            <p className="text-sm text-destructive">{errors.subject}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea
          className={`w-full resize-none h-40  ${
            touched.message && errors.message ? "border-destructive" : ""
          }`}
          placeholder={t("contact.contactForm.fields.placeholder.message")}
          onChange={handleChange}
          required={true}
          name="message"
          value={informations.message}
          onBlur={handleBlur}
        />
        <div className="h-2">
          {touched.message && errors.message && (
            <p className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>
      </div>

      <Button
        className="w-full cursor-pointer"
        disabled={!isValid}
        variant={"outline"}
      >
        {t("contact.contactForm.sendButton.title")}
      </Button>
    </form>
  );
}
