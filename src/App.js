import "./App.css";

function App() {

  return (
  <div className="App">
      <div id="calculator">
          <div id="display">
              <output id="partial"></output>
              <output id="total">0</output>
          </div>
          <div id="buttons">
              <button id="equals">=</button>
                <button className="number-buttons" id="zero">0</button>
                <button className="number-buttons" id="one">1</button>
                <button className="number-buttons" id="two">2</button>
                <button className="number-buttons" id="three">3</button>
                <button className="number-buttons" id="four">4</button>
                <button className="number-buttons" id="five">5</button>
                <button className="number-buttons" id="six">6</button>
                <button className="number-buttons" id="seven">7</button>
                <button className="number-buttons" id="eight">8</button>
                <button className="number-buttons" id="nine">9</button>
                <button className="operator-buttons" id="add">+</button>
                <button className="operator-buttons" id="subtract">-</button>
                <button className="operator-buttons" id="multiply">x</button>
                <button className="operator-buttons" id="divide">/</button>
              <button id="decimal">.</button>
              <button id="clear">AC</button>

          </div>
      </div>
  </div>
  )
}

export default App;
