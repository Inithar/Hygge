import Stripe from "https://esm.sh/stripe?target=deno";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = Stripe(Deno.env.get("STRIPE_KEY")!, {
  httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

serve(async (req) => {
  const { record } = await req.json();

  const customer = await stripe.customers.create({
    email: record.email,
    metadata: {
      supabase_id: record.id,
    },
  });

  await supabase
    .from("customers")
    .update({
      stripe_customer_id: customer.id,
    })
    .match({ id: record.id });

  return new Response(JSON.stringify({ customer_stripe_id: customer.id }), {
    headers: { "Content-Type": "application/json" },
  });
});
