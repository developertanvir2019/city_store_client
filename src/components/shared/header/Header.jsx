import FirstNav from "./FirstNav";
import { BiPhone } from "react-icons/bi";
import { FaTwitter, FaFacebook, FaDiscord } from "react-icons/fa";
import SecondNav from "./SecondNav";

const Header = () => {
  return (
    <div className="sticky -top-10 lg:-top-[6.6rem] md">
      <div className="border-b border-slate-200 bg-primary">
        <div className="mx-auto grid w-full max-w-full grid-cols-4 gap-6 py-2 px-6 text-sm md:grid-cols-8 lg:max-w-5xl lg:grid-cols-12 xl:max-w-7xl 2xl:max-w-[96rem]">
          <div className="col-span-2 items-center md:col-span-4 lg:col-span-6">
            <p className="flex items-center gap-1 text-white transition-colors duration-300 hover:text-orange-500">
              <BiPhone /> +880 1641866230
            </p>
          </div>
          <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
            <div className="flex items-center justify-end gap-4">
              <a
                href="#"
                className=" text-white transition-colors duration-300 hover:text-orange-500"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-white hover:text-orange-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 text-white hover:text-orange-500"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FirstNav />
      <SecondNav />
    </div>
  );
};

export default Header;
