/* eslint-disable react/prop-types */
import StarRatings from "react-star-ratings";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelect";
import { FiShoppingCart } from "react-icons/fi";

const DetailsModal2 = ({ product }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="detail_modal2" className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* design start */}
          <div className="lg:flex justify-between items-center">
            <img className="lg:w-1/2" src={product?.img} alt="" />
            <div className="lg:w-1/2 text-start">
              <h2 className="text-xl font-semibold">{product?.title}</h2>
              <p className="font-semibold">
                ${product?.oldPrice} <del>MRP ${product?.newPrice}</del>{" "}
                <span className="text-primary">
                  {(
                    ((product?.oldPrice - product?.newPrice) /
                      product?.oldPrice) *
                    100
                  ).toFixed(0)}
                  % OFF
                </span>
              </p>
              <div className="flex">
                <StarRatings
                  rating={product?.rating}
                  starDimension="15px"
                  starSpacing="3px"
                  starRatedColor="orange"
                />
                <p className="text-primary">(6 reviews)</p>
              </div>
              <div className="divider h-0"></div>
              <h2 className="text-lg font-semibold">Product information</h2>
              <p className="text-gray-400 ">{product?.description}</p>
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

export default DetailsModal2;
