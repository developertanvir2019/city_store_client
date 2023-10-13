import { useContext, useEffect, useState } from "react";
import useCurrentUserEmail from "../utlis/UseCurrentUserEmail";
import { AuthContext } from "../components/shared/ValueProvider/AuthProvider";
import axios from "axios";

const Checkout = () => {
  const [carts, setCarts] = useState([]);
  const { fetchCart } = useContext(AuthContext);
  const userEmail = useCurrentUserEmail();
  let totalPrice = 0;

  // Use reduce to calculate the total price
  if (carts) {
    totalPrice = carts.reduce((accumulator, cart) => {
      const { productInfo } = cart || {};
      const { newPrice } = productInfo ? productInfo[0] : {};

      // Convert newPrice to a number and add it to the accumulator
      const priceToAdd = parseFloat(newPrice || 0);
      return accumulator + priceToAdd;
    }, 0); // Initial value of accumulator is 0
  }

  const cartUrl = `https://city-server-cwdm.onrender.com/api/cart/user/${userEmail}`;
  useEffect(() => {
    if (userEmail) {
      const fetchUserCart = async () => {
        try {
          const response = await axios.get(cartUrl);
          const cartItems = response.data;
          setCarts(cartItems);
        } catch (error) {
          // Handle errors here
          console.error("Error fetching user's cart:", error);
        }
      };
      fetchUserCart();
    }
  }, [cartUrl, userEmail, fetchCart]);
  return (
    <div className="lg:flex justify-center gap-12 bg-gray-200  py-5">
      <form className="w-80 m-4 p-4 bg-white rounded shadow-xl">
        <p className="text-gray-800 font-medium">Customer information</p>
        <div className="">
          <label className="block text-sm text-gray-600" htmlFor="cus_name">
            Name
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm text-gray-600" htmlFor="cus_email">
            Email
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="cus_email">
            Address
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div className="mt-2">
          <label
            className="hidden text-sm block text-gray-600"
            htmlFor="cus_email"
          >
            City
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label
            className="hidden block text-sm text-gray-600"
            htmlFor="cus_email"
          >
            Country
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
      </form>

      <div className="flex justify-center p-3">
        <div className="flex flex-col mt-5 h-96 p-5  divide-y sm:w-96 sm:p-10 divide-gray-700 shadow-md bg-white">
          <h2 className="text-2xl font-semibold">Order items</h2>
          <ul className="flex flex-col pt-4 space-y-2">
            <li className="flex items-start justify-between">
              <h3>
                Hard taco, chicken
                <span className="text-sm dark:text-violet-400">x3</span>
              </h3>
              <div className="text-right">
                <span className="block">${totalPrice}</span>
              </div>
            </li>
          </ul>
          <div className="pt-4 space-y-2">
            <div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 mt-1 fill-current dark:text-violet-400"
                >
                  <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                  <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                </svg>
                <span className="dark:text-gray-400">
                  Spend $20.00, get 20% off
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-$99</span>
            </div>
          </div>
          <div className="pt-4 space-y-2">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>$120</span>
              </div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-violet-400"
              >
                How do our fees work?
              </a>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold">${totalPrice + 120 - 99}</span>
              </div>
              <button
                type="button"
                className="w-full py-2 font-semibold border rounded bg-primary text-white"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
