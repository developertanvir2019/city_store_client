import img1 from "../../assets/gallery/1.jpg";
import img2 from "../../assets/gallery/2.jpg";
import img3 from "../../assets/gallery/3.jpg";
import img4 from "../../assets/gallery/4.jpg";
import ShopNowButton from "../shared/button/ShopNowButton";
const Gallery = () => {
  return (
    <div className="bg-white text-white my-10 p-5">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div
          className="min-h-screen hero bg-cover relative"
          style={{
            backgroundImage: `url(${img1})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          <div className="absolute top-0 left-0 w-full py-5">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Couple Watches</h3>
              <h3 className="text-md mb-5 mt-2">50% DISCOUNT</h3>
              <ShopNowButton color={"primary"} link={"#"} />
            </div>
          </div>
        </div>

        <div className="max-h-screen flex flex-col gap-4">
          <div
            className="h-1/2 hero bg-cover relative"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute top-0 left-0 w-full py-5">
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold">Jacket Collection</h3>
                <h3 className="text-md mb-5 mt-2">BEST OFFER</h3>
                <ShopNowButton color={"primary"} link={"#"} />
              </div>
            </div>
          </div>
          <div
            className="h-1/2 hero bg-cover relative"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="absolute top-0 left-0 w-full py-5">
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold">Relex Camera</h3>
                <h3 className="text-md mb-5 mt-2">Best choice</h3>
                <ShopNowButton color={"primary"} link={"#"} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="min-h-screen hero bg-cover relative"
          style={{
            backgroundImage: `url(${img4})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>

          <div className="absolute top-0 left-0 w-full py-5">
            <div className="text-center text-white">
              <h3 className="text-2xl font-semibold">Latest Collection</h3>
              <h3 className="text-md mb-5 mt-2">WOW SUPER SALE</h3>
              <ShopNowButton color={"primary"} link={"#"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
