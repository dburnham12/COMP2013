export default function Card(props) {
    console.log(props);
    return (
        <div className={props.sale ? "card-component card-sale-glow" : "card-component"}>
            <img src={`src/assets/images/${props.image}`} alt="" width="100px" />
            <div>
                <h2>{props.name}</h2>
                {props.sale ? <h3 className="card-sale">Sale</h3> : <h3>&nbsp;</h3>}
                <p>{props.price}</p>
                <button>Buy Now</button>
            </div>
        </div>
    );
}
