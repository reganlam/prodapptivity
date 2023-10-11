import React, { useState } from "react";
import GoogleAuth from "./Components/GoogleAuth";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [verificationResult, setVerificationResult] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleAuth onVerificationResult={setVerificationResult} />
      </div>
    </div>
  );
}

export default App;
