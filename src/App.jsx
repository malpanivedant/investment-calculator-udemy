import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((previousInputValues) => {
      return { ...previousInputValues, [inputIdentifier]: +newValue };
    });
  }

  const isInputValid =
    userInput.initialInvestment > 0 && userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleInputChange={handleInputChange} />
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please Input valid data</p>
      )}
    </>
  );
}

export default App;
