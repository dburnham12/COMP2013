export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={`src/assets/images/${props.image}`} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.hotel}</h3>
            <p className={props.rating > 4 ? "high-rating" : "low-rating"}>{props.rating} ★</p>
            <p>${props.price}/night</p>
        </div>
    );
}
