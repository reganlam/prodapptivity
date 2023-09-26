import React, { useEffect } from "react";

const GoogleAuth = () => {
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // You can perform additional actions with the response here
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "993845204502-ool7i64vnbh99qq0h4s3hb0bcjsnpjkg.apps.googleusercontent.com",
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
