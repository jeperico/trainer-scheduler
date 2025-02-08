"use client";

import React, { useState, useEffect } from "react";
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { Button } from "@/components/ui/button";

// Load client ID from environment variable
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "";

const Docs = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  // Function to login and get the correct OAuth 2 access token
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login success:", tokenResponse);
      setToken(tokenResponse.access_token);
      localStorage.setItem("google-access-token", tokenResponse.access_token);
    },
    onError: () => console.log("Login failed"),
    scope:
      "https://www.googleapis.com/auth/documents https://www.googleapis.com/auth/drive.file",
  });

  // Check if access token is stored after page refresh
  useEffect(() => {
    const storedToken = localStorage.getItem("google-access-token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("google-access-token");
    setToken(null);
  };

  // Function to create a new Google Docs file
  const createFile = async (title: string) => {
    if (!token) {
      console.error("No access token available");
      return;
    }

    try {
      const response = await fetch("https://docs.googleapis.com/v1/documents", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
        }),
      });

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <main className="w-[97vw] flex items-center justify-center h-[80vh]">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4 w-80">
          {!token ? (
            <Button onClick={() => login()}>Login with Google</Button>
          ) : (
            <>
              <Button onClick={handleLogout}>Logout</Button>
              <Button onClick={() => createFile("New Document")}>
                Create Google Doc
              </Button>
            </>
          )}
        </div>
      </main>
    </GoogleOAuthProvider>
  );
};

export default Docs;
