import { useState } from "react";

const Tabs = () => {
  const [name, setName] = useState("all");
  return (
    <div className="flex justify-center bg-white my-12 py-3">
      <div className="text-md font-semibold">
        <button
          onClick={() => setName("all")}
          className={`uppercase  border m-3 px-5 py-2 border-primary rounded ${
            name === "all" ? "bg-primary text-white" : "bg-white text-primary"
          }`}
        >
          all
        </button>
        <button
          onClick={() => setName("furniture")}
          className={`uppercase  border m-3 px-5 py-2 border-primary rounded ${
            name === "furniture"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          furniture
        </button>
        <button
          onClick={() => setName("electronics")}
          className={`uppercase  border m-3 px-5 py-2 border-primary rounded ${
            name === "electronics"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          electronics
        </button>
        <button
          onClick={() => setName("sports")}
          className={`uppercase  border m-3 px-5 py-2 border-primary rounded ${
            name === "sports"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          sports
        </button>
        <button
          onClick={() => setName("medicine")}
          className={`uppercase  border m-3 px-5 py-2 border-primary rounded ${
            name === "medicine"
              ? "bg-primary text-white"
              : "bg-white text-primary"
          }`}
        >
          medicine
        </button>
      </div>
    </div>
  );
};

export default Tabs;
