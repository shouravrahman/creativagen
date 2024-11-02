import { Search } from "lucide-react";
const SearchSection = ({ onSearchInput }) => {
   return (
		<div className="px-10 rounded-md   flex flex-col justify-center items-center">
			<h2 className="text-3xl font-bold">Browse All Templates</h2>
			<div className="w-full flex items-center justify-center">
				<div className=" mx-auto my-4 w-full md:w-[50%] ">
					<label className="mb-2 text-sm font-medium sr-only ">
						Search
					</label>
					<div className="relative">
						<div className="absolute  inset-y-0 start-0 flex items-center  pointer-events-none text-background">
							<Search className="h-8 w-8 ml-2" />
						</div>
						<input
							onChange={(e) => onSearchInput(e.target.value)}
							type="search"
							id="default-search"
							className="block w-full p-4 ps-10 text-sm   placeholder:text-background  rounded-lg "
							placeholder="Search Mockups, Logos..."
							required
						/>
					</div>
				</div>
			</div>
		</div>
   );
};

export default SearchSection;
