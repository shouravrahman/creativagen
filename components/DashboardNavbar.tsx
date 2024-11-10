
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import ThemeSwitch from "./ThemeSwitch.tsx";
import IconDropdown from "./IconDropdown.tsx";
import { getSession } from "next-auth/react";
import { auth } from "@/auth/index.ts";
export interface IMenuItem {
   label: string;
   href: string;
}
const Navbar = async () => {
   const apiLimitCount = await getApiLimitCount();
   const isPro = await checkSubscription();
   const session = await auth()

   const menu = [
      { label: "Profile", href: '/profile' }
   ]
   return (
		<div className="flex items-center px-4 my-2 w-full ">
			{/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
			<div className="flex w-full justify-end gap-6">
				<ThemeSwitch />
				<IconDropdown
					menu={menu}
					img={
						session?.user?.image !== null
							? session?.user?.image
							: "/avatar.svg"
					}
				/>
			</div>
		</div>
   );
};

export default Navbar;
