import React, { useEffect } from "react";

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  // You can perform additional actions with the response here
}

const GoogleAuth = () => {
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

  return <div id="buttonDiv" />;
};

export default GoogleAuth;
