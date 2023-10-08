/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const ProductCard = ({ product, openModal }) => {
  return (
    <div className="flex justify-center">
      <div className="w-60 group bg-gray-50 mx-4 my-4">
        <div className="relative overflow-hidden">
          <img className="h-56 w-full object-cover" src={product?.img} alt="" />
          <div className="flex justify-center bg-white">
            <div>
              <StarRatings
                rating={product?.rating}
                starDimension="15px"
                starSpacing="3px"
                starRatedColor="orange"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product?.title}
              </h3>
              <h3 className="text-lg font-semibold text-primary">
                {product?.newPrice}৳{" "}
                <del className="text-gray-800">{product?.oldPrice}৳</del>
              </h3>
            </div>
          </div>
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-center gap-3">
              <div
                data-tooltip-id="add to cart"
                data-tooltip-content="add to cart"
                className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white"
              >
                <FiShoppingCart />
                <Tooltip id="add to cart" />
              </div>
              <div
                data-tooltip-id="add to wishlist"
                data-tooltip-content="add to wishlist"
                className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white"
              >
                <FiHeart />
                <Tooltip id="add to wishlist" />
              </div>
              <div
                onClick={() => openModal(product)} // Pass the product object to openModal function
                data-tooltip-id="view product"
                data-tooltip-content="view product"
                className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white"
              >
                <FiEye />
                <Tooltip id="view product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
