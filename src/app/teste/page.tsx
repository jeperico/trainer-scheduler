"use client";

import React from "react";

const Teste: React.FC = () => {
  const handle = async (e: any) => {
    e.preventDefault();

    const data = {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      message: "This is a test message",
    };

    try {
      const response = await fetch("/api/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Data successfully added:", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return <button onClick={handle}>Submit</button>;
};

export default Teste;
