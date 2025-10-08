import "./App.css";
import ColorBoxContainer from "./Components/ColorBoxContainer";
import colors from "./data/data";

function App() {
    return (
        <>
            <ColorBoxContainer colors={colors} />
        </>
    );
}

export default App;
