import StarRatings from "react-star-ratings";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelect";
import { FiShoppingCart } from "react-icons/fi";

const DetailsModal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="detail_modal" className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* design start */}
          <div className="lg:flex justify-between items-center">
            <img
              className="lg:w-1/2"
              src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/product/8.jpg"
              alt=""
            />
            <div className="lg:w-1/2 text-start">
              <h2 className="text-xl font-semibold">Wireless Headphones</h2>
              <p className="font-semibold">
                $70 <del>MRP $140</del>{" "}
                <span className="text-primary">50% OFF</span>
              </p>
              <div className="flex">
                <StarRatings
                  rating={4.203}
                  starDimension="15px"
                  starSpacing="3px"
                  starRatedColor="orange"
                />
                <p className="text-primary">(6 reviews)</p>
              </div>
              <div className="divider h-0"></div>
              <h2 className="text-lg font-semibold">Product information</h2>
              <p className="text-gray-400 ">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
              <div className="divider h-0"></div>
              <h2 className="text-xl font-semibold">Select Size</h2>
              <SizeSelector />
              <h2 className="text-xl font-semibold mt-3 mb-1">Select Color</h2>
              <ColorSelector />
              <button className="btn btn-primary bg-primary text-white font-bold my-4">
                <FiShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsModal;
