import Stripe from "https://esm.sh/stripe?target=deno";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = Stripe(Deno.env.get("STRIPE_KEY")!, {
  httpClient: Stripe.createFetchHttpClient(),
});

const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "apikey, X-Client-Info, Authorization",
      },
    });
  }

  const token = req.headers.get("Authorization")!.replace("Bearer ", "");

  const {
    data: { user },
  } = await supabase.auth.getUser(token);

  if (!user) {
    throw new Error("User not found");
  }

  const {
    data: { stripe_customer_id },
  } = await supabase.from("customers").select("stripe_customer_id").match({ id: user.id }).single();

  const { items } = await req.json();

  const fetchedItems = await Promise.all(
    items.map((item) => supabase.from("products").select("price, sale").match({ id: item.id }).single())
  );

  const amount = fetchedItems.reduce((acc, { data: { sale, price } }, currentItemIndex) => {
    const priceAfterSale = sale ? Math.floor(((100 - sale) / 100) * price) : price;
    return acc + priceAfterSale * items[currentItemIndex].qty;
  }, 0);

  const { client_secret } = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
    customer: stripe_customer_id,
  });

  return new Response(JSON.stringify({ clientSecret: client_secret }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Expose-Headers": "Content-Length, X-JSON",
      "Access-Control-Allow-Headers":
        "apikey, X-Client-Info, Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
    },
  });
});
