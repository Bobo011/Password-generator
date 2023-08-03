
import './App.css'
import { MainContainer,MainSection } from "./components/";
import {
  SliderBlue,
  CheckBoxes,
  TextStrength,
  GenerateButton,
} from "./components/Other";
function App() {


  return (
    <div className="flex justify-center items-center h-screen bg-sky-400 w-full">
      <MainContainer>
        <MainSection />
        <SliderBlue />
        <CheckBoxes />
        <TextStrength />
        <GenerateButton />
      </MainContainer>
    </div>
  );
}

export default App
