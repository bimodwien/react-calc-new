import React from "react";
import Result from "./components/Result";
import Action from "./components/Action";
import History from "./components/History";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#FAF9F6]">
        <div className="flex flex-col bg-[#252525] text-[#FAF9F6] w-2/6 h-[750px] rounded-l-lg">
          <Result />
          <Action />
        </div>
        <div className="bg-[#252525] text-[#FAF9F6] border-l-2 border-[#FAF9F6] w-1/6 h-[750px] rounded-r-lg">
          <History />
        </div>
      </div>
    </>
  );
}

export default App;
