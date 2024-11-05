import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { currentUser } from "@/lib/auth.ts";

const settingsUrl = absoluteUrl("/dashboard");

export async function GET() {
  try {
    const user = await currentUser();
    console.log(user);

	if (!user || !user) {
		return new NextResponse("Unauthorized", { status: 401 });
	}

	const userSubscription = await prismadb.userSubscription.findUnique({
		where: {
			userId: user.id,
		},
	});

	if (userSubscription && userSubscription.stripeCustomerId) {
		const stripeSession = await stripe.billingPortal.sessions.create({
			customer: userSubscription.stripeCustomerId,
			return_url: settingsUrl,
		});

		return new NextResponse(JSON.stringify({ url: stripeSession.url }));
	}

	const stripeSession = await stripe.checkout.sessions.create({
		success_url: settingsUrl,
		cancel_url: settingsUrl,
		payment_method_types: ["card"],
		mode: "subscription",
		billing_address_collection: "auto",
		customer_email: user.email,
		line_items: [
			{
				price_data: {
					currency: "USD",
					product_data: {
						name: "Creativagen Pro",
						description: "Unlimited AI Generations",
					},
					unit_amount: 2000,
					recurring: {
						interval: "month",
					},
				},
				quantity: 1,
			},
		],
		metadata: {
			userId: user.id,
		},
	});

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
