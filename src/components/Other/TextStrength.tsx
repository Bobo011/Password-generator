import React from "react";

interface TextStrengthProps {
  textLength: number;
}

export const TextStrength: React.FC<TextStrengthProps> = ({ textLength }) => {
  function getTextStrength(length: number): string {
    if (length >= 1 && length <= 3) {
      return "Weak";
    } else if (length >= 4 && length <= 6) {
      return "Medium";
    } else if (length >= 7 && length <= 9) {
      return "Strong";
    } else if (length >= 10 && length <= 12) {
      return "Very Strong";
    } else {
      return "";
    }
  }

  const strength = getTextStrength(textLength);

  return (
    <>
      <div className="flex mt-2 justify-between">
        <p>Strength:</p>
        <p>{strength}</p>
      </div>
    </>
  );
};
