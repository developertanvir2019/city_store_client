import Slider from "react-slick";
import ProductCard from "../products/ProductCard";
import Tabs from "./Tabs";
import Spinner from "../shared/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailsModal2 from "../products/DetailModal2";

const ProductsTab = () => {
  const [category, setCategory] = useState("");
  let title = "";
  var settings = {
    dots: true,
    rows: 2,
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
  const [isLoading, setLoading] = useState(false);
  // ...

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://city-server-cwdm.onrender.com/api/product/list",
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
    document.getElementById("detail_modal2").showModal();
  };

  if (!isLoading && !allProducts?.length) {
    return (
      <div className="text-primary text-2xl flex justify-center font-semibold">
        <h1> No Products found</h1>
      </div>
    );
  }
  return (
    <div>
      <Tabs setCategory={setCategory} />
      <div className="mx-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <Slider {...settings}>
            {allProducts
              ?.slice()
              .reverse()
              .map((product) => (
                <ProductCard
                  key={product?._id}
                  product={product}
                  openModal={() => openModal(product)} // Pass openModal function
                />
              ))}
          </Slider>
        )}
      </div>
      <DetailsModal2 product={selectedProduct} />
    </div>
  );
};

export default ProductsTab;
