import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID = process.env.CLIENT_ID || "";

const LoginButton = () => {
  const onSuccess = (res: any) => {
    console.log("Current User:", res.profileObj);
    console.log(res);
  };
  const onFailure = (res: any) => {
    console.log("Login failed:", res);
  };

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default LoginButton;
