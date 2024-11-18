import React, { useRef, useState } from "react";
import Result from "./components/Result";
import Action from "./components/Action";
import History from "./components/History";
import { ContextAction } from "./context/ActionContext";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [result, setResult] = useState(0);
  const actionToCalculate = useRef(null);

  const [liveHistory, setLiveHistory] = useState("");
  const [listHistory, setListHistory] = useState([]);

  function angka(angka) {
    console.log("angka dipanggil dalam function angka: ", angka);
    setInputNumber(inputNumber + angka);
  }

  function handleAction(action) {
    console.log("handleAction dipanggil dengan:", action);
    if (actionToCalculate.current !== null && inputNumber !== "") {
      calculate();
    } else if (inputNumber !== "") {
      setResult(inputNumber);
    }

    if (action === "=") {
      const lastAction = actionToCalculate.current;
      actionToCalculate.current = null;
      setLiveHistory(`${result} ${lastAction} ${inputNumber}`);
      setInputNumber("");
    } else {
      actionToCalculate.current = action;
      setInputNumber("");
    }
  }

  function liveCurrentHistory() {
    setLiveHistory(`${result} ${actionToCalculate.current} ${inputNumber}`);
  }

  function calculate() {
    if (inputNumber === "") return;
    let calculateResult = 0;
    if (actionToCalculate.current === "+") {
      calculateResult = Number(result) + Number(inputNumber);
    } else if (actionToCalculate.current === "-") {
      calculateResult = Number(result) - Number(inputNumber);
    } else if (actionToCalculate.current === "*") {
      calculateResult = Number(result) * Number(inputNumber);
    } else if (actionToCalculate.current === "/") {
      calculateResult = Number(result) / Number(inputNumber);
    }
    liveCurrentHistory();
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
    setLiveHistory("");
  }

  function handlePercent() {
    setInputNumber((inputNumber / 100).toString());
  }

  function handlePlusMinus() {
    setInputNumber((inputNumber * -1).toString());
  }

  function handleClickHistory(currentHistory) {
    setInputNumber(currentHistory.hasil.toString());
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#FAF9F6]">
        <div className="flex flex-col bg-[#252525] text-[#FAF9F6] w-2/6 h-[750px] rounded-l-lg">
          <Result
            currentHistory={liveHistory}
            inputNumber={inputNumber}
            result={result}
            currentAction={actionToCalculate.current}
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
