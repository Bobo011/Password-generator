import React from "react";

interface CheckBoxesProps {
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (value: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
}

export const CheckBoxes: React.FC<CheckBoxesProps> = ({
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}) => {
  return (
    <>
      <div className="flex mb-5 mt-2 justify-between">
        <label htmlFor="uppercase">
          <input
            type="checkbox"
            name="uppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />{" "}
          Include Uppercase Letters
        </label>
        <label htmlFor="lowercase">
          <input
            type="checkbox"
            name="lowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />{" "}
          Include Lowercase Letters
        </label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="numbers">
          <input
            type="checkbox"
            name="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />{" "}
          Include Numbers
        </label>
        <label className="mr-16" htmlFor="symbols">
          <input
            type="checkbox"
            name="symbols"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />{" "}
          Include Symbols
        </label>
      </div>
    </>
  );
};
