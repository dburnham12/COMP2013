import { useState } from "react";

export default function ColorBox({ colors, harmonizeColors, harmonizedColor }) {
    function getRandomNumber(numItems) {
        return Math.floor(Math.random() * numItems);
    }

    const numItems = colors.length;
    const [randomNumber, setRandomNumber] = useState(getRandomNumber(numItems));

    return (
        <div
            className="color-box"
            onClick={() => setRandomNumber(getRandomNumber(numItems))}
            style={{ backgroundColor: harmonizeColors ? harmonizedColor : colors[randomNumber] }}
        ></div>
    );
}
