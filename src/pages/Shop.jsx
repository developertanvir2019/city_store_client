import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { AuthContext } from "../components/shared/ValueProvider/AuthProvider";
import axios from "axios";
import Pagination from "../components/pagination/Pagination";
import Spinner from "../components/shared/Spinner";
import DetailsModal from "../components/products/DetailsModal";

const Shop = () => {
  const { title, category } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/list",
          {
            params: { category, title, page: pageNumber },
          }
        );

        setProducts(response.data); // Assuming response.data contains the product list
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, title, pageNumber]);

  const [selectedProduct, setSelectedProduct] = useState(null); // Add selectedProduct state

  // Function to open the modal with the product object
  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("detail_modal").showModal();
  };

  let content = null;
  if (loading) content = <Spinner />;

  if (!loading && !products?.length) {
    content = (
      <div className="text-center mb-6 text-3xl font-semibold text-primary">
        No video found!
      </div>
    );
  }
  if (!loading && products?.length) {
    content = (
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {products?.map((product) => (
          <ProductCard
            key={product?._id}
            product={product}
            openModal={() => openModal(product)} // Pass openModal function
          />
        ))}
      </div>
    );
  }
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
      <div>{content}</div>
      <DetailsModal product={selectedProduct} />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        button={products?.length}
      />
    </div>
  );
};

export default Shop;
