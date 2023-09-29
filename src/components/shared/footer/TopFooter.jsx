import { RxAvatar } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { FaFax, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

const TopFooter = () => {
  return (
    <footer className="w-full text-slate-400">
      <div className="pt-16 pb-12 text-sm border-t border-slate-900 bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-product-dark"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-dark"
              >
                Product
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Customers
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Why us?
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>

            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-about-dark"
            >
              <h3 className="text-lg font-semibold text-black pb-2">
                MY ACCOUNT
              </h3>
              <ul>
                <li className="py-2">
                  <span>About Us</span>
                </li>
                <li className="py-2">
                  <span>Contact Us</span>
                </li>
                <li className="py-2">
                  <span>Terms & Conditions</span>
                </li>
                <li className="py-2">
                  <span>Returns & Exchanges</span>
                </li>
                <li className="py-2">
                  <span>Shipping & Delivery</span>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3"
              aria-labelledby="footer-about-dark"
            >
              <h3 className="text-lg font-semibold text-black pb-2">
                CONTACT US
              </h3>
              <ul>
                <li className="flex gap-1 items-center py-2">
                  <FaLocationArrow />
                  <span>city Store Demo Store bangladesh-1240</span>
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaMailBulk />
                  <span>Email Us: tanvir101tk@gmail.Com</span>
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaPhone />
                  <span>Call Us: 01930223005</span>
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaFax />
                  <span>Fax 123456</span>
                </li>
              </ul>
            </nav>
            <nav className="col-span-2 md:col-span-4 lg:col-span-3">
              <ul>
                <li className="text-xl font-semibold text-black pb-2">
                  NEWSLETTER
                </li>
                <li>
                  <div className="form-control">
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="py-2 px-4 border"
                      />
                      <span className="bg-primary text-white text-lg font-semibold">
                        <RxAvatar />
                      </span>
                    </label>
                    <label className="input-group my-4">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="py-2 px-4 border"
                      />
                      <span className="bg-primary text-white text-lg font-semibold">
                        <AiOutlineMail />
                      </span>
                    </label>
                  </div>
                  <button className="btn  text-white bg-primary">
                    Submit Now
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TopFooter;
