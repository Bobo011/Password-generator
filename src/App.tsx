import  { useState } from "react";
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
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  return (
    <div className="flex justify-center items-center h-screen bg-sky-400 w-full">
      <MainContainer>
        <MainSection
          textLength={sliderValue}
          generatedPassword={generatedPassword}
        />
        <SliderBlue sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <CheckBoxes />
        <TextStrength textLength={sliderValue} />
<<<<<<< HEAD
        <GenerateButton
          textLength={sliderValue}
          onGenerateClick={setGeneratedPassword}
        />
=======
        <GenerateButton />
>>>>>>> 1e8a64afd2db6b46b08270c1c2a8531142263223
      </MainContainer>
    </div>
  );
}

export default App;
