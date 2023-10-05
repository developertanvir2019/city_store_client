import ProductCard from "../components/products/ProductCard";

const Shop = () => {
  return (
    <div>
      <div>
        <img
          src="https://themes.pixelstrap.com/bigdeal/assets/images/category/1.jpg"
          alt=""
        />
      </div>

      <div className="text-center">
        <h2 className="text-3xl uppercase font-semibold inline-block relative mb-12 mt-5">
          Products
          <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
        </h2>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
