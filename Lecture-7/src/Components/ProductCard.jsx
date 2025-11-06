export default function ProductCard({
    productQuantity,
    img,
    product,
    handleOnChangePrice,
    handleAddToQuantity,
    handleRemoveQuantity,
}) {
    // const [productQuantity, setProductQuantity] = useState({
    //   //compound state to track the product quantity
    //   quantity,
    //   priceOptions: priceOptions[0],
    // });

    //Building our output
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
                value={productQuantity.currentPrice}
                onChange={(e) => {
                    //   console.log(e.target.value);
                    handleOnChangePrice(productQuantity.id, e);
                }}
            >
                {productQuantity.priceOptions.map((price, index) => (
                    <option key={index} value={price}>
                        {price.toFixed(2)}
                    </option>
                ))}
            </select>
            {/* display the total price */}
            <p>Total Price: ${(productQuantity.quantity * productQuantity.currentPrice).toFixed(2)}</p>

            {/* button to add quantity */}
            <button onClick={() => handleAddToQuantity(productQuantity.id)}>Add</button>
            {/* button to remove quantity */}
            <button onClick={() => handleRemoveQuantity(productQuantity.id)}>Remove</button>
        </div>
    );
}
