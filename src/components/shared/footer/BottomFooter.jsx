import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
const BottomFooter = () => {
  return (
    <div className="py-4 text-sm border-t border-slate-900 bg-gray-600">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-6 text-white text-lg">
            &copy; Copyright 2023 by city shop
          </div>
          <nav
            aria-labelledby="footer-social-links-dark"
            className="col-span-2 text-right md:col-span-4 lg:col-span-6"
          >
            <h2 className="sr-only" id="footer-social-links-dark">
              Social Media Links
            </h2>
            <ul className="flex items-center justify-end gap-4 text-gray-800">
              <li className="text-lg bg-white p-2 rounded-full shadow-lg">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="text-lg bg-white p-2 rounded-full shadow-lg">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="text-lg bg-white p-2 rounded-full shadow-lg">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="text-lg bg-white p-2 rounded-full shadow-lg">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="text-lg bg-white p-2 rounded-full shadow-lg">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-secondary"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
