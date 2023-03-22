import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/layout/navigation";
import { Home } from "./components/pages/home";
import { AddItem } from "./components/pages/addItem";
import { ItemsContextProvider } from "./components/context/contextApp";
import { Cart } from "./components/pages/cart";

function App() {
  return (
    <div className="App">
      <ItemsContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ItemsContextProvider>
    </div>
  );
}

export default App;
