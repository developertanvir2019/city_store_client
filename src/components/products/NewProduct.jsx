import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import { AuthContext } from "../shared/ValueProvider/AuthProvider";
import DetailsModal from "./DetailsModal";
import axios from "axios";
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
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/list",
          {
            params: { category, title, page },
          }
        );

        setAllProducts(response.data); // Assuming response.data contains the product list
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, title, page]);

  const [selectedProduct, setSelectedProduct] = useState(null); // Add selectedProduct state

  // Function to open the modal with the product object
  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("detail_modal").showModal();
  };
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!isLoading && !allProducts?.length) {
    return (
      <div className="text-primary text-2xl flex justify-center font-semibold">
        <h1> No Products found</h1>
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
              <ProductCard
                key={product?._id}
                product={product}
                openModal={() => openModal(product)} // Pass openModal function
              />
            ))}
          </Slider>
          <DetailsModal product={selectedProduct} />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
