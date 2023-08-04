import React, { useState } from "react";
import "./App.css";
import { MainContainer, MainSection } from "./components/";
import {
  SliderBlue,
  CheckBoxes,
  TextStrength,
  GenerateButton,
} from "./components/Other";

function App() {
  const [sliderValue, setSliderValue] = useState<number>(6);

  return (
    <div className="flex justify-center items-center h-screen bg-sky-400 w-full">
      <MainContainer>
        <MainSection textLength={sliderValue} />
        <SliderBlue sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <CheckBoxes />
        <TextStrength />
        <GenerateButton />
      </MainContainer>
    </div>
  );
}

export default App;
