import "./App.css";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppRouter /> {/* Properly using Router */}
      <header className="">
       

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
