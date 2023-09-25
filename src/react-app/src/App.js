import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("client id: " + process.env.GOOGLE_OAUTH_CLIENT_ID);

  return (
    <GoogleOAuthProvider
      clientId={
        process.env.GOOGLE_OAUTH_CLIENT_ID ||
        "993845204502-ool7i64vnbh99qq0h4s3hb0bcjsnpjkg.apps.googleusercontent.com"
      }
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. Testing.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            window.location.reload();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
