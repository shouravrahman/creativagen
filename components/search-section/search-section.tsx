import { Search } from "lucide-react";
const SearchSection = ({ onSearchInput }) => {
  return (
    <div className="px-10 rounded-md py-6  flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">BROWSE All TEMPLATES</h2>
      <p className="text-priamry hidden lg:block">
        Find the right tool for you
      </p>
      <div className="w-full flex items-center justify-center">
        <div className=" mx-auto my-4 w-full md:w-[50%] ">
          <label className="mb-2 text-sm font-medium text-foreground sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-accent"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={(e) => onSearchInput(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm bg-card placeholder:text-card-foreground  rounded-lg "
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
