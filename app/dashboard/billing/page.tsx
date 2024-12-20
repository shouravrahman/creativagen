import { DollarSign } from "lucide-react";

import { Heading } from "@/components/Heading";
import { SubscriptionButton } from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
	const isPro = await checkSubscription();

	return (
		<div>
			<Heading
				title="Billing"
				description="Manage account settings."
				icon={DollarSign}
				iconColor=" "
				bgColor="bg-gray-700/10"
			/>
			<div className="px-4 my-4 lg:px-8 space-y-4">
            <div className="text-accent text-sm">
					{isPro
						? "You are currently on a Pro plan."
						: "You are currently on a free plan."}
				</div>
				<SubscriptionButton isPro={isPro} />
			</div>
		</div>
	);
};

export default SettingsPage;
