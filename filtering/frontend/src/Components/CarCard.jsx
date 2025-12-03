export default function CarCard({ make, model, image, price, color }) {
    return (
        <div className="CarCard">
            <h3>{make}</h3>
            <h4>{model}</h4>
            <img src={image} alt="" width="100px" />
            <p>
                <i>{price}</i>
            </p>
            <p>{color}</p>
        </div>
    );
}
