import * as zod from "zod";

const contactScheme = zod.object({
  fullName: zod.string().min(5, "At least 5 characters"),
  emailAddress: zod.string().email("Invalid email address"),
  subject: zod.string().min(10, "At least 10 characters"),
  message: zod.string().min(30, "At least 30 characters"),
});

export default contactScheme;
