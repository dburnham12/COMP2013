import { useState } from "react";
import ColorBox from "./ColorBox";

export default function ColorBoxContainer({ colors }) {
    const [harmonizeColors, setHarmonizeColors] = useState(false);

    return (
        <div className="color-box-container">
            <h3>Colors {harmonizeColors ? " Harmonized" : " Randomized"}</h3>
            <div className="color-box-container-display">
                {colors.map((color, index) => (
                    <ColorBox key={index} colors={colors} harmonizeColors={harmonizeColors} harmonizedColor={color} />
                ))}
            </div>
            <div className="color-box-container-buttons">
                <button onClick={() => setHarmonizeColors(false)}>Randomize Colors</button>
                <button onClick={() => setHarmonizeColors(true)}>Harmonize Colors</button>
            </div>
        </div>
    );
}
