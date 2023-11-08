import { supabase } from "../lib/supabase";

type ContactEmailData = {
  message: string;
  email: string;
  fullName: string;
  subject: string;
};

export const addUserToNewsletter = async (email: string) => {
  const { data, error } = await supabase.from("newsletter").insert([{ email }]).select().single();

  if (error?.code === "23505") {
    throw new Error("User with provided email address is already subscribed to the newsletter");
  }

  if (error) {
    throw new Error("User could not be signed up to newsletter");
  }

  return data;
};

export const sendContactEmail = async ({ fullName, subject, message, email }: ContactEmailData) => {
  const receiver = (() => {
    switch (subject) {
      case "customerService":
        return "care@hygge.com";
      case "largeOrder":
        return "sales@hygge.com";
      case "publicRelations":
        return "media@hygge.com";
      default:
        return "general@hygge.com";
    }
  })();

  const { data, error } = await supabase.functions.invoke("resend", {
    body: JSON.stringify({
      contactEmail: {
        receiver,
        fullName,
        message,
        email,
      },
    }),
  });

  if (error) {
    throw new Error("Email could not be send");
  }

  return data;
};
