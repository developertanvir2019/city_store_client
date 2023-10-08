import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../utlis/fetchProducts";
import Spinner from "../shared/Spinner";
import { AuthContext } from "../shared/ValueProvider/AuthProvider";
const NewProduct = () => {
  const { title, category } = useContext(AuthContext);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const page = 1;

  const [allProducts, setAllProducts] = useState([]); // Initialize as an empty array

  // ...

  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useQuery(
    ["products", category, title, page],
    async () => {
      const data = await fetchProducts(category, title, page);
      return data;
    },
    {
      staleTime: 60000,
      onSuccess: (data) => {
        setAllProducts(data);
      },
    }
  );
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 text-2xl font-semibold">
        Error: {error.message}
      </div>
    );
  }
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl uppercase font-semibold inline-block relative mb-16">
        New Product
        <div className="absolute top-10 left-0 w-full h-1 bg-primary "></div>
      </h2>
      <div className="mx-8">
        <div>
          <Slider {...settings}>
            {allProducts?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
