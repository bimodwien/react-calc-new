import React, { useRef, useState, useEffect } from "react";
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

  function angka(angkaInput) {
    setInputNumber((prevInput) => prevInput + angkaInput);
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

  function handleBackspace() {
    if (inputNumber !== "") {
      setInputNumber(inputNumber.slice(0, -1));
    }
  }

  function handleClickHistory(currentHistory) {
    setResult(currentHistory.hasil);
    const operationString = `${currentHistory.inputPertama} ${currentHistory.inputKalkulasi} ${currentHistory.inputKedua}`;
    setLastOperation(operationString);
    setInputNumber("");
    actionToCalculate.current = null;
  }

  useEffect(() => {
    function handleKeyDown(event) {
      const { key } = event;
      if ((key >= "0" && key <= "9") || key === ".") {
        event.preventDefault();
        angka(key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        event.preventDefault();
        handleAction(key);
      } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        handleAction("=");
      } else if (key === "Backspace") {
        event.preventDefault();
        handleBackspace();
      } else if (key === "Escape") {
        event.preventDefault();
        handleClear();
      } else if (key === "%") {
        event.preventDefault();
        handlePercent();
      } else if (key === "p") {
        event.preventDefault();
        handlePlusMinus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputNumber, result]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#FAF9F6]">
        <div className="flex flex-col bg-[#252525] text-[#FAF9F6] w-2/6 h-[750px] rounded-l-lg">
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
        <div className="bg-[#252525] text-[#FAF9F6] border-l-2 border-[#FAF9F6] w-1/6 h-[750px] rounded-r-lg">
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
