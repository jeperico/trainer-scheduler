import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID || "";

const LoginButton = () => {
  const onSuccess = (res: any) => {
    console.log("Current User:", res.profileObj);
    console.log(res);
  };
  const onFailure = () => {
    console.log("Login failed:");
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </GoogleOAuthProvider>
  );
};

export default LoginButton;
