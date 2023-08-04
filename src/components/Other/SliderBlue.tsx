import React from "react";

interface SliderBlueProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

export const SliderBlue: React.FC<SliderBlueProps> = ({
  sliderValue,
  setSliderValue,
}) => {
  function displayLength(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  }

  return (
    <>
      <div className="w-full">
        <input
          className="w-full"
          type="range"
          min={1}
          max={12}
          step={1}
          value={sliderValue}
          onChange={displayLength}
        />
      </div>
    </>
  );
};
