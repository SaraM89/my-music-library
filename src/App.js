import React from "react";
import "./App.css";
import Routes from "./containers/Routes";
// import NavBar from "./containers/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">My Music Library</header>
      <section>
        <Routes />
      </section>
    </div>
  );
}
export default App;
