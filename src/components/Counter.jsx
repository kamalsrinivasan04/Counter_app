import { useState, useEffect } from "react";
import "./Counter.css";


function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);

  };

  const decreaseCount = () => {
    if(count > 0 === true){
      setCount(count - 1);

    }
    
  };

  const resetCount = () => {
    setCount(0);
  };

  useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === "+") {
      setCount((prevCount) => prevCount + 1);
    }

    if (event.key === "-") {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        }
        return 0;
      });
    }
    if (event.key === "Backspace") {
      setCount(0);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <div className="counter-container">
      <h1>React Counter App</h1>

      <h2>Count : {count}</h2>

      <div className="button-group">
        <button onClick={increaseCount} >+</button>

        <button onClick={decreaseCount}>-</button>

        <button onClick={resetCount}>Reset</button>
      </div>

      {count > 0 && (
        <p className="positive">
          Positive Number
        </p>
      )}

      {/* {count < 0 && (
        <p className="negative">
          Negative Number
        </p>
      )} */}

      {count === 0 && (
        <p className="zero">
          Count is Zero
        </p>
      )}
    </div>
  );
}





export default Counter;