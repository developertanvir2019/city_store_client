const TopBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="bg-cyan-700 border-2 p-1 col-span-4 lg:col-span-3">
          Column 3/12
        </div>
        <div className="bg-cyan-700 border-2 p-1 col-span-4 lg:col-span-3">
          Column 3/12
        </div>
        <div className="bg-cyan-700 border-2 p-1 col-span-4 lg:col-span-6">
          Column 6/12
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
