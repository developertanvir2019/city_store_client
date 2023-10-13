import { MdDiscount, MdLocalShipping } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { FcCustomerSupport } from "react-icons/fc";
const Service = () => {
  return (
    <div className="flex justify-center">
      <div className="my-4 mx-2 grid lg:grid-cols-4 md:grid-cols-2">
        <div className="flex justify-center px-5 bg-white w-72 py-6 rounded-md text-gray-500 hover:bg-primary hover:text-white">
          <div className="flex items-center text-xl gap-4">
            <span className="text-2xl text-red-400">
              <MdLocalShipping />
            </span>
            <span className="font-semibold">Free Shipping</span>
          </div>
        </div>
        <div className="flex justify-center px-5 bg-white w-72 py-6 rounded-md text-gray-500 hover:bg-primary hover:text-white">
          <div className="flex items-center text-xl gap-4">
            <span className="text-2xl text-red-400">
              <PiMoney />
            </span>
            <span className="font-semibold">Money Return</span>
          </div>
        </div>
        <div className="flex justify-center px-5 bg-white w-72 py-6 rounded-md text-gray-500 hover:bg-primary hover:text-white">
          <div className="flex items-center text-xl gap-4">
            <span className="text-2xl text-red-400">
              <MdDiscount />
            </span>
            <span className="font-semibold">Festival Discount</span>
          </div>
        </div>
        <div className="flex justify-center px-5 bg-white w-72 py-6 rounded-md text-gray-500 hover:bg-primary hover:text-white">
          <div className="flex items-center text-xl gap-4">
            <span className="text-2xl">
              <FcCustomerSupport />
            </span>
            <span className="font-semibold">24*7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
