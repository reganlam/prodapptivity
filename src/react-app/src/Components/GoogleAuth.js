import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleAuth = ({ onAuthCallback }) => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );

    window.google.accounts.id.prompt();
  }, []);

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var test = jwt_decode(response.credential);
    console.log(test);

    onAuthCallback(test);
  }

  return (
    <div>
      <div id="buttonDiv" />
    </div>
  );
};

export default GoogleAuth;
