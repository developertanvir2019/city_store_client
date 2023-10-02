import ProductCard from "./ProductCard";
const NewProduct = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl uppercase font-semibold inline-block relative mb-16">
        New Product
        <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
      </h2>
      <div className="">
        <ProductCard />
      </div>
    </div>
  );
};

export default NewProduct;
