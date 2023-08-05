import React from "react";

interface GenerateButtonProps {
  textLength: number;
  onGenerateClick: (generatedText: string) => void;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  textLength,
  onGenerateClick,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}) => {
  function handleGenerateClick() {
    const generatedText = generateRandomWord(textLength);
    onGenerateClick(generatedText);
  }

  function generateRandomWord(length: number): string {
    let characters = "";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  return (
    <>
      <div className="mt-2 ">
        <button
          type="button"
          onClick={handleGenerateClick}
          className=" w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 text-center focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Generate Password
        </button>
      </div>
    </>
  );
};
