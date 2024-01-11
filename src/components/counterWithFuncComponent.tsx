import React, { useState } from "react";

const CounterWithFunc = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="py-1 px-3 rounded bg-gray-300 "
      onClick={() => setCount((pre) => pre + 1)}
    >
      {count}
    </button>
  );
};

export default CounterWithFunc;
