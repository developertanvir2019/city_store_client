/* eslint-disable react/prop-types */
import axios from "axios";
import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { AuthContext } from "../shared/ValueProvider/AuthProvider";
import Swal from "sweetalert2";

const ViewCartProduct = ({ cart }) => {
  const { img, title, newPrice, description } = cart?.productInfo?.[0] || {};
  const { fetchCart, setFetchCart } = useContext(AuthContext);
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://city-server-cwdm.onrender.com/api/cart/${id}`
      );
      Swal.fire("Deleted", "SuccessFully deleted", "success");
      setFetchCart(!fetchCart);
    } catch (error) {
      // Handle errors if the deletion fails
      console.error("Error deleting item:", error);
      Swal.fire("Deleted FAiled", "failed to delete", "error");
    }
  };
  return (
    <div className="flex items-center my-4 hover:bg-gray-100  border border-gray-300 shadow-sm -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={img} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className=" text-xs">{description.slice(0, 30)}...</span>
          <p className="cursor-pointer font-semibold  text-red-500  text-lg flex items-center">
            <FiDelete onClick={() => handleDelete(cart?._id)} />
          </p>
          {/* Here, we've added an onClick event listener to the "Remove" link that calls a function to remove the product from the cart */}
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8 bg-transparent"
          type="text"
          value={cart?.quantity}
          readOnly
        />
        {/* We've added the readOnly attribute to make sure the quantity input field is not editable by the user */}

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <div className="flex w-1/3 justify-end">
        <span className="text-gray-600 mx-auto">{newPrice} ৳</span>
        <span className="text-gray-600 ml-0">
          {newPrice * cart?.quantity} ৳
        </span>
      </div>
    </div>
  );
};

export default ViewCartProduct;
