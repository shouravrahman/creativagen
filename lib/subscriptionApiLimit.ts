import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

export async function checkSubscriptionAndApiLimit(): Promise<{ isPro: boolean; freeTrial: boolean }> {
   // Logic for subscription check
   const isPro = await checkSubscription();

   // Logic for API limit check
   const freeTrial = await checkApiLimit();

   return { isPro, freeTrial };
}