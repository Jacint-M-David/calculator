import logo from "./logo.svg";
import "./App.css";

function App() {
    
  return (
  <div className="App">
      <div id="calculator">
          <div id="dislay">
              <output id="partial"></output>
              <output id="total"></output>
          </div>
          <div id="buttons">
              <button id="equals">=</button>
              <div id="numbers">
                <button id="zero">0</button>
                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>
                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>
                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>
              </div>
              <div id="operators">
                <button id="add">+</button>
                <button id="subtract">-</button>
                <button id="multiply">*</button>
                <button id="divide">/</button>
              </div>
              <button id="decimal">.</button>
              <button id="clear">AC</button>

          </div>
      </div>
  </div>
  )
}

export default App;
