import GoogleAuth from "./Components/GoogleAuth";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleAuth />
      </header>
    </div>
  );
}

export default App;
