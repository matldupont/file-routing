import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import reactLogo from "../assets/react.svg";

type AppProps = {
  children?: React.ReactNode;
};
const App: React.FC<AppProps> = ({ children }) => (
  <div className="App">
    <nav id="top-nav">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div className="nav-title">
        <Link to="/">File-based Routing</Link>{" "}
      </div>
    </nav>
    <div className="container">
      <Sidebar />
      {children}
    </div>
  </div>
);

export default App;
