import { FiDelete, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div className="bg-white">
      <h2 className="text-center text-primary font-semibold text-3xl py-5">
        wishlist
      </h2>
      <table className="table w-full ">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th className="-ms-12">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className=" border-b border-gray-400">
            <td>
              <div>
                <img
                  className="h-24 w-auto"
                  src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/product/1.jpg"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </td>
            <td>faejlf</td>
            <td>jfaowejf</td>
            <td>
              <div className="flex justify-start items-center gap-4 text-lg">
                <FiDelete />
                <FiShoppingCart />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-6 me-4">
        <div className="flex gap-3">
          <Link to="/shop" className="btn btn-primary text-white bg-primary">
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="btn btn-primary text-white bg-primary"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
