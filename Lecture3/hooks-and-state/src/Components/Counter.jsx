import { useState } from "react";

export default function Counter() {
    // we define the variable and setter function then we assign useState to then
    // add the initial value for the variable as an argument for usState function
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                    console.log(counter);
                }}
            >
                Add to counter
            </button>
            <button
                onClick={() => {
                    setCounter(counter - 1);
                    console.log(counter);
                }}
            >
                Subtract from counter
            </button>
            <button
                onClick={() => {
                    setCounter(0);
                }}
            >
                Reset
            </button>
        </div>
    );
}
