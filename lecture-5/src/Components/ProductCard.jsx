import { useState } from "react";
import data from "../data/data";
const testProduct = data[0]; // import data for testing

export default function ProductCard({
    product = testProduct.product, // adding default values in case data is not provided so the app wont break
    priceOptions = testProduct.priceOptions,
    img = testProduct.img,
    quantity = testProduct.quantity,
}) {
    const [productQuantity, setProductQuantity] = useState({
        quantity,
        priceOptions: priceOptions[0],
    });

    // Building our output
    return (
        <div className="ProductCard">
            {/* image */}
            <img src={img} alt="" height="100px" />
            {/* product name */}
            <h3>{product}</h3>
            {/* product quantity */}
            <p>Quantity: {productQuantity.quantity}</p>
            {/* price dropdown menu */}
            {/* onChange event is responsible to set the state to the option the user picks from the menu */}
            <select
                value={productQuantity.priceOptions}
                onChange={(e) =>
                    setProductQuantity((prevData) => {
                        return { ...prevData, priceOptions: parseFloat(e.target.value) };
                    })
                }
            >
                {priceOptions.map((price, index) => (
                    <option key={index} value={price}>
                        {price.toFixed(2)}
                    </option>
                ))}
            </select>
            {/* display the total price */}
            <p>Total Price: ${(productQuantity.quantity * productQuantity.priceOptions).toFixed(2)}</p>
            {/* button to add quantity */}
            <button
                onClick={() =>
                    setProductQuantity((prevData) => {
                        return { ...prevData, quantity: prevData.quantity + 1 };
                    })
                }
            >
                Add
            </button>
            {/* button to remove quantity */}
            <button
                onClick={() =>
                    setProductQuantity((prevData) => {
                        return { ...prevData, quantity: prevData.quantity > 0 ? prevData.quantity - 1 : 0 };
                    })
                }
            >
                Remove
            </button>
        </div>
    );
}
