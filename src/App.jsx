import "./App.css";
import Counter from "./components/Counter";
import PokemonsApp from "./components/PokemonsApp";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>Practicando Redux</h1>
      <a href="">GitHub</a>
      <hr />
      <Counter />
      <hr />
      <PokemonsApp />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
