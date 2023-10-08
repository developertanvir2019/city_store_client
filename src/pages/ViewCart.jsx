import { FiDelete } from "react-icons/fi";

const ViewCart = () => {
  return (
    <div className="mx-auto mt-10">
      <div className="lg:flex shadow-sm my-10">
        <div className="lg:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">5 Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {/* products */}

          <div className="flex items-center hover:bg-gray-100  border border-gray-300 shadow-sm -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://themes.pixelstrap.com/bigdeal/assets/images/mega-store/product/1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">amr product</span>
                <span className=" text-xs">tital</span>
                <p className="cursor-pointer font-semibold  text-red-500  text-lg flex items-center">
                  <FiDelete />
                </p>
                {/* Here, we've added an onClick event listener to the "Remove" link that calls a function to remove the product from the cart */}
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                className="mx-2 border text-center w-8"
                type="text"
                value={678}
                readOnly
              />
              {/* We've added the readOnly attribute to make sure the quantity input field is not editable by the user */}

              <svg
                className="fill-current text-gray-600 w-3"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <div className="flex w-1/3 justify-end">
              <span className="text-gray-600 mx-auto">$27</span>
              <span className="text-gray-600 ml-0">593</span>
            </div>
            <input type="checkbox" id="my-modal-8" className="modal-toggle" />
            <label htmlFor="my-modal-8" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-xl font-semibold text-secondary py-2 text-center">
                  Please complete your payment
                </h3>
                <h3 className="text-2xl font-semibold text-center">
                  Payable amount BDT- <span className="text-primary">120</span>
                </h3>
              </label>
            </label>
          </div>

          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items = 38</span>
            <span className="font-semibold text-sm">$83</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <h3 className="text-lg font-semibold">Standard shipping - $120</h3>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span> 120</span>
            </div>
            <label
              htmlFor="my-modal-8"
              className="uppercase w-full btn mt-4 bg-primary btn-primary"
            >
              Checkout
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
