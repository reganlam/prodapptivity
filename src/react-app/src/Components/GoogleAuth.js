import React, { useEffect } from "react";
import axios from "axios";

const verifyToken = async () => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");

    // TODO: fix url
    const response = await axios.post("http://localhost:3001/user/verify", {
      jwtToken,
    });
    return response.data.message;
  } catch (error) {
    return error.response ?? error.message;
  }
};

const GoogleAuth = ({ onVerificationResult }) => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );

    window.google.accounts.id.prompt();
  }, []);

  const handleCredentialResponse = async (response) => {
    localStorage.setItem("jwtToken", response.credential);

    const verificationResult = await verifyToken();
    console.log("verificationResult: ", verificationResult);
    onVerificationResult(verificationResult);
  };

  return (
    <div>
      <div id="signInDiv" />
    </div>
  );
};

export default GoogleAuth;
