import StarRatings from "react-star-ratings";
import ShopNowButton from "../shared/button/ShopNowButton";

const ProductCard = () => {
  return (
    <div className="bg-white shadow-xl flex h-64 lg:w-1/2 md:w-1/2 sm:w-full">
      <img
        className="w-1/2 p-3"
        src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/hot-deal/1.jpg"
        alt="Movie"
      />
      <div className="w-1/2 flex justify-start items-center">
        <div className="mt-4 ms-4">
          <StarRatings
            rating={4}
            starDimension="18px"
            starSpacing="3px"
            starRatedColor="orange"
          />
          <h2 className="font-semibold text-xl">Smart Phone</h2>
          <p className="text-lg font-semibold">
            <span className="text-primary">$60</span>{" "}
            <del className="text-red-600">80</del>
          </p>
          <div className="mt-5">
            <ShopNowButton color={"primary"} link={"#"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
