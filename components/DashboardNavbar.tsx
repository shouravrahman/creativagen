
import ThemeSwitch from "./ThemeSwitch.tsx";
import IconDropdown from "./IconDropdown.tsx";
import { auth } from "@/auth/index.ts";
export interface IMenuItem {
   label: string;
   href: string;
}
const Navbar = async () => {

   const session = await auth()

   const menu = [
      { label: "Profile", href: '/profile' }
   ]
   return (
      <div className="flex items-center px-4 mt-1 w-full ">
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
