import React, { useState } from "react";
import GoogleAuth from "./Components/GoogleAuth";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user ? `Hello ${user.name}` : "Not logged in"}{" "}
        <GoogleAuth onAuthCallback={setUser} />
      </header>
    </div>
  );
}

export default App;
