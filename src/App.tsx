import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Country, Club, Ligue, Name, Position, Age, Main } from "./screens";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const navs = [
    {
      path: "/game",
      element: (
        <>
          <Main />
          <h1>Selecciona una Categoría</h1>
        </>
      ),
    },
    {
      path: "/game/country",
      element: (
        <>
          <Main />
          <Country />
        </>
      ),
    },
    {
      path: "/game/club",
      element: (
        <>
          <Main />
          <Club />
        </>
      ),
    },
    {
      path: "/game/ligue",
      element: (
        <>
          <Main />
          <Ligue />
        </>
      ),
    },
    {
      path: "/game/name",
      element: (
        <>
          <Main />
          <Name />
        </>
      ),
    },
    {
      path: "/game/position",
      element: (
        <>
          <Main />
          <Position />
        </>
      ),
    },
    {
      path: "/game/age",
      element: (
        <>
          <Main />
          <Age />
        </>
      ),
    },
  ];

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            {navs.map((v) => {
              return <Route path={v.path} element={v.element} />;
            })}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
