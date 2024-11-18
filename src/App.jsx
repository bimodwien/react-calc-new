import React, { useRef, useState } from "react";
import Result from "./components/Result";
import Action from "./components/Action";
import History from "./components/History";
import { ContextAction } from "./context/ActionContext";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState(0);
  const actionToCalculate = useRef(null);

  const [listHistory, setListHistory] = useState([]);
  const [lastOperation, setLastOperation] = useState("");

  function angka(angka) {
    setInputNumber(inputNumber + angka);
  }

  function handleAction(action) {
    if (actionToCalculate.current !== null && inputNumber !== "") {
      calculate();
    } else if (inputNumber !== "") {
      setResult(inputNumber);
      setLastOperation(inputNumber);
    }
    if (action === "=") {
      actionToCalculate.current = null;
      setInputNumber("");
    } else {
      actionToCalculate.current = action;
      setInputNumber("");
    }
  }

  function calculate() {
    if (inputNumber === "") return;
    let calculateResult = 0;
    let numResult = Number(result);
    let numInput = Number(inputNumber);
    let operationString = "";

    if (actionToCalculate.current === "+") {
      calculateResult = numResult + numInput;
      operationString = `${numResult} + ${numInput}`;
    } else if (actionToCalculate.current === "-") {
      calculateResult = numResult - numInput;
      operationString = `${numResult} - ${numInput}`;
    } else if (actionToCalculate.current === "*") {
      calculateResult = numResult * numInput;
      operationString = `${numResult} * ${numInput}`;
    } else if (actionToCalculate.current === "/") {
      calculateResult = numResult / numInput;
      operationString = `${numResult} / ${numInput}`;
    }
    setLastOperation(operationString);
    setResult(calculateResult);
    setListHistory([
      ...listHistory,
      {
        inputPertama: result,
        inputKalkulasi: actionToCalculate.current,
        inputKedua: inputNumber,
        hasil: calculateResult,
      },
    ]);
  }

  function handleClear() {
    actionToCalculate.current = null;
    setInputNumber("");
    setResult(0);
    setLastOperation("");
  }

  function handlePercent() {
    if (inputNumber !== "") {
      setInputNumber((inputNumber / 100).toString());
    } else {
      setResult((result / 100).toString());
      setLastOperation(`${result} %`);
    }
  }

  function handlePlusMinus() {
    if (inputNumber !== "") {
      setInputNumber((inputNumber * -1).toString());
    } else {
      setResult((result * -1).toString());
      setLastOperation(`${result} +/-`);
    }
  }

  function handleClickHistory(currentHistory) {
    setResult(currentHistory.hasil);
    const operationString = `${currentHistory.inputPertama} ${currentHistory.inputKalkulasi} ${currentHistory.inputKedua}`;
    setLastOperation(operationString);
    setInputNumber("");
    actionToCalculate.current = null;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center min-h-screen bg-[#FAF9F6]">
        <div className="flex flex-col bg-[#252525] text-[#FAF9F6] w-full lg:w-2/6 h-screen lg:h-[750px] lg:rounded-l-lg">
          <Result
            inputNumber={inputNumber}
            result={result}
            currentAction={actionToCalculate.current}
            lastOperation={lastOperation}
          />
          <ContextAction.Provider
            value={{
              setAngka: angka,
              onHandlePercent: handlePercent,
              onHandleClear: handleClear,
              onHandleAction: handleAction,
              onHandlePlusMinus: handlePlusMinus,
            }}
          >
            <Action />
          </ContextAction.Provider>
        </div>
        <div className="bg-[#252525] text-[#FAF9F6] border-l-2 border-[#FAF9F6] w-full lg:w-1/6 h-screen lg:h-[750px] lg:rounded-r-lg lg:block hidden">
          <History
            listHistory={listHistory}
            handleClickHistory={handleClickHistory}
          />
        </div>
      </div>
    </>
  );
}

export default App;
