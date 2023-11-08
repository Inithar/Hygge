import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { newsletter } from "./emails/newsletter.ts";

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "apikey, X-Client-Info, Authorization",
      },
    });
  }

  const { table, record, contactEmail } = await req.json();

  let body = {};

  if (table === "newsletter") {
    body = {
      from: "Hygge <onboarding@resend.dev>", // team@hygge.com
      subject: "Welcome to Our newsletter",
      to: "szymon.switala@proton.me", // record.email
      html: newsletter,
    };
  }

  if (contactEmail) {
    body = {
      from: "Hygge <onboarding@resend.dev>", // contactEmail.email
      subject: `Contact email from ${contactEmail.fullName}`,
      to: "szymon.switala@proton.me", // contactEmail.receiver
      html: contactEmail.message,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Expose-Headers": "Content-Length, X-JSON",
      "Access-Control-Allow-Headers":
        "apikey, X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
    },
  });
};

serve(handler);
