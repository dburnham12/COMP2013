import "./App.css";
import Card from "./Components/Card";
//import HelloWorld from "./Components/HelloWorld";

function App() {
    return (
        <>
            <h1>Diamond World</h1>
            <div className="main-container">
                <Card image="1.jpg" name="Princess" price="$1,350" />
                <Card image="2.jpg" name="Swan" price="$900" sale={true} />
                <Card image="3.jpg" name="Collection" price="$1,100" sale={true} />
            </div>
        </>
    );
}

export default App;
