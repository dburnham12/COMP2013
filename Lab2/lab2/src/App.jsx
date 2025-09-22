import "./App.css";
import Card from "./Components/Card";

function App() {
    return (
        <>
            <h1>Resorts Lite</h1>
            <div className="card-container">
                <Card image="1.jpg" name="Indonesia" hotel="Gili Air Hotel" rating={4.8} price={589} />
                <Card image="2.jpg" name="Seychelles" hotel="Hilton Resort" rating={4.2} price={629} />
                <Card image="3.jpg" name="US Virgin Islands" hotel="Goa Resort" rating={3.5} price={485} />
                <Card image="4.jpg" name="Bahamas" hotel="Kuredu Resort" rating={4.1} price={729} />
                <Card image="5.jpg" name="Mauritius" hotel="Trou D'eau Douce" rating={4.9} price={877} />
                <Card image="6.jpg" name="Bermuda" hotel="Staniel Cay Hotel" rating={3.2} price={365} />
            </div>
        </>
    );
}

export default App;
