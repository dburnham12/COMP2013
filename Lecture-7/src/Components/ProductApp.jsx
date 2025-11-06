import { useState } from "react";
import ProductCardsContainer from "./ProductCardsContainer";

export default function ProductApp({ data }) {
    const [productQuantity, setProductQuantity] = useState(
        data.map((prod) => {
            return {
                id: prod.id,
                quantity: prod.quantity,
                priceOptions: prod.priceOptions,
                currentPrice: prod.priceOptions[0],
            };
        })
    );

    const handleOnChangePrice = (productId, e) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return { ...prod, currentPrice: e.target.value };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
    };

    const handleAddToQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
    };

    const handleRemoveQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return { ...prod, quantity: prod.quantity - 1 > 0 ? prod.quantity - 1 : 0 };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
    };

    return (
        <div>
            <ProductCardsContainer
                data={data}
                productQuantity={productQuantity}
                handleOnChangePrice={handleOnChangePrice}
                handleAddToQuantity={handleAddToQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
            />
        </div>
    );
}
