export const MainSection = () => {
  function copyText() {
    const element = document.querySelector(".mb-6 p");
    const button = document.getElementById("button") ;

    if (element instanceof HTMLElement) {
      // 'element' is guaranteed to be an HTMLElement, not null
      const textToCopy: string | number = element.innerText;

      // Write the text to the clipboard
      navigator.clipboard
        .writeText(textToCopy.toString()) // No need to convert to string, it's already a string
        .then(() => {
          // Success! You can optionally show a success message here.
          console.log("Text copied to clipboard:", textToCopy);
          if (button) {
            button.innerHTML = "Copied";
          }
        })
        .catch((error) => {
          // Handle any errors that might occur during the writeText operation.
          console.error("Error copying text to clipboard:", error);
        });
    } else {
      console.error("Element not found");
    }
  }

  return (
    <>
      <div className="mb-6 flex justify-between">
        <p>asdasdxczsad</p>
        <button
          onClick={copyText}
          type="button"
          id="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-between">
        <p>Character Length</p>
        <p>10</p>
      </div>
    </>
  );
};
