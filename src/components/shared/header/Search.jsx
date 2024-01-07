import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AuthContext } from "../ValueProvider/AuthProvider";
const Search = () => {
  const { setTitle, setCategory, category } = useContext(AuthContext);
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };
  return (
    <div className="flex items-center">
      {/* Add the select element here */}
      <select
        id="category"
        name="category"
        className="py-3 px-4 text-white bg-primary font-semibold cursor-pointer"
        defaultValue={category} // Bind the value to the category state
        onChange={handleCategoryChange} // Handle changes in the select element
      >
        <option value="">All Category</option>
        <option value="furniture">Furniture</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="shoes">Shoes</option>
        <option value="cloths">Cloths</option>
      </select>

      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border py-[.66rem] bg-slate-100 outline-none p-[.64rem] w-80 space-x-4"
          type="text"
          placeholder="Product name or keyword..."
        />
      </div>

      <div className="bg-primary p-4 text-white font-semibold  cursor-pointer">
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
