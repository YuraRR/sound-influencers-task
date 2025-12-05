import "./App.css";
import GlassContainer from "./components/GlassContainer/GlassContainer";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
      <Loader />
      <h2>Task 2</h2>
      <GlassContainer />
    </div>
  );
}

export default App;
