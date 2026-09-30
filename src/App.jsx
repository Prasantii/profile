import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";
import { createContext, useEffect, useState } from "react";

function App() {
  const ThemeContext = createContext();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("dark");
  }, []);
  return (
    <ThemeContext.Provider value={"light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Home />}></Route>
          <Route path="*" element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
