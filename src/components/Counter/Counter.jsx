import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  /*
  const handleSum = () => {
    setCount(count + 1);
  };
  const handleLess = () => {
    setCount(count - 1);
  };
*/

  const handleClick = (operacion) => {
    if (operacion === "sum") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  useEffect(() => {
    console.log("Mira mama, me ejecute cuando el componente cargo");
  }, []);

  return (
    <section>
      <p>El contador va: {count}</p>
      <button
        onClick={() => {
          handleClick("sum");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleClick("less");
        }}
      >
        -
      </button>
    </section>
  );
};
export default Counter;
