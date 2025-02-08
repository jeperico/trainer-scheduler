import React from "react";
import { GoogleLogout } from "react-google-login";

const clientID = process.env.CLIENT_ID || "";

const LogoutButton = () => {
  const onSuccess = () => {
    console.log("Logout success!");
  };

  return (
    <GoogleLogout
      clientId={clientID}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
};

export default LogoutButton;
