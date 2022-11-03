import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./components/PageRoutes";

import "./App.css";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
