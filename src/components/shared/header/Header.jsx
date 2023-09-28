import FirstNav from "./FirstNav";
import { BiPhone } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className="bg-primary flex justify-between px-20 py-1">
        <h6 className="text-white">Bigdeal Ecommerce Always Free Delevery</h6>
        <h6 className="text-white flex items-center gap-1">
          <BiPhone /> <span>Call Us: 123 - 456 - 7890</span>
        </h6>
        <h6 className="text-white flex font-semibold">shop now</h6>
      </div>
      <FirstNav />
    </div>
  );
};

export default Header;
