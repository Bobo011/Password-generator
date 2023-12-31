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
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-sky-400 w-full">
      <MainContainer>
        <MainSection
          textLength={sliderValue}
          generatedPassword={generatedPassword}
        />
        <SliderBlue sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <CheckBoxes
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <TextStrength textLength={sliderValue} />
        <GenerateButton
          textLength={sliderValue}
          onGenerateClick={setGeneratedPassword}
          includeUppercase={includeUppercase}
          includeLowercase={includeLowercase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
        />
      </MainContainer>
    </div>
  );
}


export default App;
