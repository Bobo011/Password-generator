import React from "react";

interface MainSectionProps {
  textLength: number;
  generatedPassword: string; // Add this line
}

export const MainSection: React.FC<MainSectionProps> = ({
  textLength,
  generatedPassword,
}) => {
  const [localText, setLocalText] = React.useState("");

  function copyText() {
    const element = document.querySelector(".mb-6 p");
    const button = document.getElementById("button");

    if (element instanceof HTMLElement) {
      const textToCopy: string = element.innerText;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          if (button) {
            button.innerHTML = "Copied";
          }
        })
        .catch((error) => {
          console.error("Error copying text to clipboard:", error);
        });
    } else {
      console.error("Element not found");
    }
  }

  React.useEffect(() => {
    const element = document.querySelector(".mb-6 p");
    if (element instanceof HTMLElement) {
      const generatedText = generateText(textLength);
      element.innerText = generatedText;
      setLocalText(generatedText);
    }
  }, [textLength]);

  React.useEffect(() => {
    // Update localText when generatedPassword changes
    setLocalText(generatedPassword);
  }, [generatedPassword]);

  function generateRandomWord(length: number): string {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  function generateText(length: number): string {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <p>{localText}</p>
        <button
          onClick={copyText}
          type="button"
          id="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Copy
        </button>
      </div>
      <div className="flex mb-2 justify-between">
        <p>Character Length</p>
        <p>{textLength}</p>
      </div>
    </>
  );
};
