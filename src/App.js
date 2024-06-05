import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const handleClickPlus = () => {
        setState( state + 1)
        if (state >= 5) {
            alert("Нельзя больше 5")
            setState(5)
        }
    }

    const handleClick = () => {
        setState( state - 1)
        if (state <= 0) {
            alert("Нельзя меньше 0")
            setState(0)
        }
    }

    console.log('a' + 1)

  return (
    <div className="App">
        <header className="App-header">
            <button onClick={handleClick} className="button">Click-</button>
            <div>Не меньше 0 и не больше 5: <b>{state}</b></div>
            <button  onClick={handleClickPlus} className="button">Click+</button>
        </header>
    </div>
  );
}

export default App;
