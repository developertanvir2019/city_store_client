const CountDown = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-2">
      <div className="flex flex-col bg-gray-200 p-2">
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col bg-gray-200 p-2">
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col bg-gray-200 p-2">
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col bg-gray-200 p-2">
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": 27 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
