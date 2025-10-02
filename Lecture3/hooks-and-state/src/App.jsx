import "./App.css";
import Counter from "./Components/Counter";
import BadCounter from "./Components/BadCounter";
import CounterWithLimit from "./Components/CounterWithLimit";
import Toggle from "./Components/Toggle";
import EmojiStore from "./Components/EmojiStore";

function App() {
    return (
        <>
            <BadCounter />
            <Counter />
            <CounterWithLimit />
            <Toggle />
            <EmojiStore />
        </>
    );
}

export default App;
