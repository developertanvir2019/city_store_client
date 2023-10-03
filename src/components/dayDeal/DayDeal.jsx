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
            <h2 className="font-semibold text-xl">Smart Phone</h2>
            <p className="text-lg font-semibold">
              <span className="text-primary">$60</span> <del>80</del>
              <p className="text-gray 500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                neque sit dolore.
              </p>
            </p>
            <div className="justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl flex h-72 w-1/2">
          <img
            className="w-1/2"
            src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/hot-deal/1.jpg"
            alt="Movie"
          />
          <div className="w-1/2">
            <h2 className="">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDeal;
