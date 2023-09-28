import { Link } from "react-router-dom";
import Search from "./Search";
import { BiLocationPlus } from "react-icons/bi";

const FirstNav = () => {
  return (
    <>
      <div className="hidden navbar bg-base-100 lg:flex justify-between px-6">
        <div className="">
          <Link to="/">
            <img
              className="h-12 w-auto"
              src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/logo.png"
              alt="city store"
            />
          </Link>
        </div>
        <div className="form-control">
          <Search />
        </div>
        <div className="dropdown dropdown-end">
          <button className=" text-white font-semibold py-3 px-5 flex items-center bg-primary">
            <span> store location </span>
            <span className="text-xl ps-2">
              <BiLocationPlus />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstNav;
