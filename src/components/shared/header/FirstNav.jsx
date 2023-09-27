import { Link } from "react-router-dom";
import Search from "./Search";

const FirstNav = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="">
          <Link to="/">
            <img
              className="h-12 w-auto"
              src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/logo.png"
              alt="city store"
            />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <Search />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstNav;
