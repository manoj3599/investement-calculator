import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment :1000,
    annualInvestment : 1200,
    expectedReturn: 6,
    duration: 10
});

const inputisValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput =>{
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      };
  });
}

  return (
    <div>
    <Header/>
    <UserInput userInput={userInput} onChange = {handleChange}/>
    {!inputisValid && <p className="center">Please enter duration greater than zero</p>}
   {inputisValid && <Results input={userInput}/>}
    </div>
    
  )
}

export default App
