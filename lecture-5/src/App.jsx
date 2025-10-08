import "./App.css";
import data from "./data/data";
import ProductCardContainer from "./Components/ProductCardContainer";

function App() {
    return (
        <>
            <ProductCardContainer data={data} />
        </>
    );
}

export default App;
