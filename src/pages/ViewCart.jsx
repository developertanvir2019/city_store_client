import { useContext, useEffect, useState } from "react";
import ViewCartProduct from "../components/viewCart/ViewCartProduct";
import useCurrentUserEmail from "../utlis/UseCurrentUserEmail";
import { AuthContext } from "../components/shared/ValueProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewCart = () => {
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
    <div className="mx-auto mt-10">
      <div className="lg:flex shadow-sm my-10">
        <div className="lg:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {/* products */}
          {carts?.length ? (
            carts?.map((cart) => {
              return <ViewCartProduct key={cart?._id} cart={cart} />;
            })
          ) : (
            <div className="flex justify-center">
              <h2 className="text-2xl font-semibold my-12 mx-auto">
                NO Data found
              </h2>
            </div>
          )}
          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items = {carts?.length}
            </span>
            <span className="font-semibold text-sm">${totalPrice}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <h3 className="text-lg font-semibold">Standard shipping - $120</h3>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span> {totalPrice + 120}</span>
            </div>
            <Link
              to="/checkout"
              className="uppercase w-full btn mt-4 bg-primary btn-primary"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
