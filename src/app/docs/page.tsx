"use client";

import React, { useEffect } from "react";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
let gapi: any;
if (typeof window !== "undefined") {
  gapi = require("gapi-script").gapi;
}

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
const SCOPES = "https://www.googleapis.com/auth/drive";

const Docs = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    };

    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <h1>Docs</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Docs;
