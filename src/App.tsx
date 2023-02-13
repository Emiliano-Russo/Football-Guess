import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Country, Club, Ligue, Name, Position, Age, Main } from "./screens";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Main />} />
            <Route path="/game/country" element={<Country />} />
            <Route path="/game/club" element={<Club />} />
            <Route path="/game/ligue" element={<Ligue />} />
            <Route path="/game/name" element={<Name />} />
            <Route path="/game/position" element={<Position />} />
            <Route path="/game/age" element={<Age />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
