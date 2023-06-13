import React from 'react'
import { useState } from 'react';

export const Counter = () => {
    // let counter = 0;
    let [counter, setCounter] = useState(0);

    function increaseCounter(inNum){
        // counter++;
        setCounter(counter+inNum);
    }
    function decreaseCounter(dcrNum){
        // counter--;
        setCounter(counter-dcrNum);
    }
  return (
    <div>
        <h2 className="counter_value">
            The value of the counter is {counter}
        </h2>
        <button onClick={() => increaseCounter(1)}>Increase by 1</button>
        <button onClick={() => increaseCounter(5)}>Increase by 5</button>

        <button onClick={() => decreaseCounter(1)}>Decrease by 1</button>
        <button onClick={() => decreaseCounter(10)}>Decrease by 10</button>
    </div>
  )
}
