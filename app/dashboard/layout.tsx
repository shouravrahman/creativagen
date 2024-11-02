import Navbar from "@/components/DashboardNavbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import { Toaster } from "sonner";
import { auth } from "@/middleware";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount();
	const isPro = await checkSubscription();
	const session = await auth();
	const isAdmin = session?.user && session?.user.role !== "Admin";
	return (
		<div className="relative  flex h-screen ">
			<div className="hidden sm:flex  h-full overflow-y-hidden">
				<Sidebar
					isPro={isPro}
					apiLimitCount={apiLimitCount}
					isAdmin={isAdmin}
				/>
			</div>
			<main className="flex-1 overflow-y-auto  p-4 ">
				<Navbar />
				<Toaster />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
