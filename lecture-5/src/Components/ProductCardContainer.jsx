import ProductCard from "./ProductCard";

export default function ProductCardContainer({ data }) {
    return (
        <div className="ProductCardContainer">
            {data.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
}
