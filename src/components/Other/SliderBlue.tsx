import React from "react";

export const SliderBlue = () => {
  function displayLength(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <>
      <div className="w-full">
        <input
        className="w-full"
          type="range"
          min={0}
          max={12}
          step={1}
          defaultValue={6}
          onChange={displayLength}
        />
      </div>
    </>
  );
};
