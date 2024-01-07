import { FiDelete, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { fetchWishlist } from "../features/wishlist/wishlistSlice";
import useCurrentUserEmail from "../utlis/UseCurrentUserEmail";
import Spinner from "../components/shared/Spinner";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../components/shared/ValueProvider/AuthProvider";

const Wishlist = () => {
  const { fetchCart, setFetchCart } = useContext(AuthContext);
  const userEmail = useCurrentUserEmail();
  const dispatch = useDispatch();
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(true); // Local state for loading
  const { isLoading, isError, error, wishlist } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (userEmail) {
      // Fetch wishlist data only if userEmail is available
      dispatch(fetchWishlist(userEmail))
        .then(() => {
          setIsLoadingWishlist(false); // Set local loading state to false
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
          setIsLoadingWishlist(false); // Handle errors by setting loading state
        });
    }
  }, [dispatch, userEmail]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://city-server-cwdm.onrender.com/api/wishlist/${id}`
      );
      Swal.fire("Deleted", "SuccessFully deleted", "success");
      dispatch(fetchWishlist(userEmail));
    } catch (error) {
      // Handle errors if the deletion fails
      console.error("Error deleting item:", error);
      Swal.fire("Deleted FAiled", "failed to delete", "error");
    }
  };

  const addToCart = async (id) => {
    try {
      const response = await axios.post(
        "https://city-server-cwdm.onrender.com/api/cart/add",
        {
          userEmail,
          productId: id,
        }
      );
      if (response.status === 201) {
        setFetchCart(!fetchCart);
        dispatch(fetchWishlist(userEmail));
        Swal.fire("success", "Product added to cart successfully", "success");
      } else {
        Swal.fire("success", response?.message, "success");
        dispatch(fetchWishlist(userEmail));
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire(
        "Failed",
        "An error occurred while adding the product to the cart",
        "error"
      );
    }
  };

  // Check if userEmail is null or loading wishlist
  if (userEmail === null || isLoadingWishlist) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2 className="text-2xl font-semibold my-12 mx-auto">{error}</h2>;
  }

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center">
        {" "}
        <h2 className="text-2xl font-semibold my-12 mx-auto">NO DAta found</h2>
      </div>
    );
  }
  return (
    <div className="bg-white text-slate-700 lg:px-12">
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
          {wishlist?.map((data) => (
            <tr key={data?._id} className=" border-b border-gray-400">
              <td>
                <div>
                  <img
                    className="h-24 w-auto"
                    src={data?.productInfo[0]?.img}
                    alt={data?.productInfo[0]?.title}
                  />
                </div>
              </td>
              <td>{data?.productInfo[0]?.title}</td>
              <td>{data?.productInfo[0]?.newPrice}</td>
              <td>
                <div className="flex justify-start items-center gap-4 text-lg">
                  <FiDelete onClick={() => handleDelete(data?._id)} />
                  <FiShoppingCart
                    onClick={() => addToCart(data?.productInfo[0]?._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-start mt-6 me-4">
        <Link to="/shop" className="btn btn-primary text-white bg-primary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
