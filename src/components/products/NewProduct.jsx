import StarRatings from "react-star-ratings";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
const NewProduct = () => {
  return (
    <div className="my-32">
      <div className="w-60 group bg-gray-50">
        <div className="relative overflow-hidden">
          <img
            className="h-auto w-full object-cover"
            src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/product/7.jpg"
            alt=""
          />
          <div className="flex justify-center bg-white">
            <div>
              <StarRatings
                rating={2.403}
                starDimension="15px"
                starSpacing="3px"
                starRatedColor="orange"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Men fashion shoes
              </h3>
              <h3 className="text-lg font-semibold text-primary">
                $50 <del className="text-gray-800">$70</del>
              </h3>
            </div>
          </div>
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-center gap-3">
              <div className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white">
                <FiShoppingCart />
              </div>
              <div className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white">
                <FiHeart />
              </div>
              <div className="p-3 rounded-full bg-white text-lg hover:bg-primary hover:text-white">
                <FiEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
