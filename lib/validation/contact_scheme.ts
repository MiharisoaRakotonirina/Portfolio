import * as zod from "zod";

export const createContactScheme = (t: (...args: any[]) => string) => {
  return zod.object({
    fullName: zod
      .string()
      .min(5, t("contact.contactForm.fields.errors.fullName")),
    emailAddress: zod
      .string()
      .email(t("contact.contactForm.fields.errors.emailAddress")),
    subject: zod
      .string()
      .min(10, t("contact.contactForm.fields.errors.subject")),
    message: zod
      .string()
      .min(30, t("contact.contactForm.fields.errors.message")),
  });
};
