import React from "react";
import Result from "./components/Result";
import Action from "./components/Action";
import History from "./components/History";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="block px-10 border border-black  w-2/6 h-[750px]">
          <Result />
          <Action />
        </div>
        <div className="border border-black w-1/6 h-[750px]">
          <History />
        </div>
      </div>
    </>
  );
}

export default App;
