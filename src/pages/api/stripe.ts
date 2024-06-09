import type { APIContext } from "astro";
import Stripe from "stripe";

export async function POST(context: APIContext): Promise<Response> {
  const body = await context.request.json();
  const origin = body.origin;

  const STRIPE_PUBLIC_API_KEY = import.meta.env.STRIPE_PUBLIC_API_KEY;
  const stripe = new Stripe(import.meta.env.STRIPE_KEY);
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    mode: "payment",
    automatic_tax: { enabled: false },
    return_url: `${origin}/return/session_id={CHECKOUT_SESSION_ID}`,
    line_items: [
      {
        price: "price_1PPijE02qLCErWrIot84cpnJ",
        quantity: 1,
      },
    ],
  });

  const responseBody = {
    sessionKey: STRIPE_PUBLIC_API_KEY,
    secret: session.client_secret,
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  });
  
}
