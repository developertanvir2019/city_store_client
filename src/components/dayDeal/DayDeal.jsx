import StarRatings from "react-star-ratings";

const DayDeal = () => {
  return (
    <div className="text-center mx-5">
      <h2 className="text-3xl uppercase font-semibold inline-block relative my-12">
        DEAL OF THE DAY
        <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
      </h2>

      <div className="lg:flex md:flex gap-6 sm:block">
        <div className="bg-white shadow-xl flex h-72 lg:w-1/2 md:w-1/2 sm:w-full">
          <img
            className="w-1/2"
            src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/hot-deal/1.jpg"
            alt="Movie"
          />
          <div className="w-1/2 text-start">
            <div className="mt-4 ms-4">
              <h2 className="font-semibold text-xl">Smart Phone</h2>
              <p className="text-lg font-semibold">
                <span className="text-primary">$60</span> <del>80</del>
              </p>
              <p className="text-gray 500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                neque sit dolore.
              </p>
              <StarRatings
                rating={4}
                starDimension="18px"
                starSpacing="3px"
                starRatedColor="orange"
              />
              <p className="text-lg font-bold text-gray-400 pt-2">Expired</p>
              <div className="mt-5">
                <a
                  className="px-5 py-2 rounded-md text-white font-bold bg-primary"
                  href="#"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl flex h-72 lg:w-1/2 md:w-1/2 sm:w-full">
          <img
            className="w-1/2"
            src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/hot-deal/2.jpg"
            alt="perfumes"
          />
          <div className="w-1/2 text-start">
            <div className="mt-4 ms-4">
              <h2 className="font-semibold text-xl">Perfumes</h2>
              <p className="text-lg font-semibold">
                <span className="text-primary">$45</span> <del>50</del>
              </p>
              <p className="text-gray 500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <StarRatings
                rating={4}
                starDimension="18px"
                starSpacing="3px"
                starRatedColor="orange"
              />
              <p className="text-lg font-bold text-gray-400 pt-2">Expired</p>
              <div className="mt-5">
                <a
                  className="px-5 py-2 rounded-md text-white font-bold bg-primary"
                  href="#"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDeal;
