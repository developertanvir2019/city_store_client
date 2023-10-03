import { RxAvatar } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { FaFax, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopFooter = () => {
  return (
    <footer className="w-full text-slate-500 bg-white">
      <div className="pt-6 pb-12 text-sm bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex justify-center">
              <nav className="">
                <ul>
                  <li>
                    <Link to="/">
                      <img
                        className="h-12 w-auto"
                        src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/logo.png"
                        alt="city store"
                      />
                    </Link>
                  </li>
                  <li>
                    <p className="py-3">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC.
                    </p>
                  </li>
                  <li>
                    <img
                      className=""
                      src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"
                      alt="city shop payment"
                    />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-center">
              <nav className="">
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
            </div>
            <div className="flex justify-center">
              <nav className="">
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
            </div>
            <div className="flex justify-center">
              <nav className="">
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
      </div>
    </footer>
  );
};

export default TopFooter;
