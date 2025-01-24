import React from "react";
import { Button } from "../ui/button";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Button variant="outline" onClick={handleCopy}>
      Copiar
    </Button>
  );
};

export default CopyButton;
