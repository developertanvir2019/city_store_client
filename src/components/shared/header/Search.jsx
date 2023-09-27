import { BiSolidDownArrow } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="flex items-center">
      <div className="flex py-3 px-4 items-center  text-white bg-primary font-semibold cursor-pointer">
        <span>All categories</span>
        <span className="ps-2">
          <BiSolidDownArrow />
        </span>
      </div>
      <div>
        <input
          className="border-2 outline-none p-3 w-72 space-x-4 rounded-lg"
          type="text"
          placeholder="Article name or keyword..."
        />
      </div>

      <div className="bg-primary p-4 text-white font-semibold  cursor-pointer">
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
