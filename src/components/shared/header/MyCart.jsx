/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const MyCart = ({ carts }) => {
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
  return (
    <div>
      <nav className="text-primary text-xl font-semibold bg-gray-200 px-5 py-2 sticky top-0">
        My Cart
      </nav>
      <div className="min-h-screen">
        {carts?.map((cart) => {
          const { productInfo } = cart || {};
          const { img, newPrice, oldPrice, title } = productInfo
            ? productInfo[0]
            : {}; // Destructure img and newPrice from productInfo[0] or provide an empty object if productInfo is null/undefined

          return (
            <div
              key={cart?._id}
              className="w-72 h-32 border shadow-md border-gray-400 mx-6 my-3 p-2 flex"
            >
              <div>
                <img className="w-20 h-auto" src={img} alt={title} />
              </div>
              <div>
                <h2 className="text-[1.14rem] font-semibold">{title}</h2>
                <h3 className="text-[1rem] my-2 font-semibold text-primary">
                  ${newPrice} <del className="text-gray-800">${oldPrice}</del>
                </h3>
                <div className="flex justify-center w-1/5 ms-5 my-2">
                  <p className="px-1 border cursor-pointer hover:bg-primary hover:text-white font-semibold">
                    -
                  </p>
                  <input
                    className="border text-center w-8"
                    type="text"
                    value="1"
                  />
                  <p className="px-1 border cursor-pointer hover:bg-primary hover:text-white font-semibold">
                    +
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaEdit />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <footer className="bg-gray-200 me-4 p-3 sticky bottom-0">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Total</h2>
          <h2 className="text-lg font-semibold">{totalPrice}</h2>
        </div>
        <div className="flex gap-3">
          <Link to="/viewCart" className="btn btn-primary bg-primary">
            View Card
          </Link>
          <Link to="/checkout" className="btn btn-primary bg-primary">
            Checkout
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MyCart;
