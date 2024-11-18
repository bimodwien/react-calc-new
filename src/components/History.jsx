import React from "react";

const History = ({ listHistory, handleClickHistory }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold p-2">History</h1>
      <div className="py-5">
        {listHistory.map((history, index) => {
          return (
            <div
              className="p-2 cursor-pointer hover:bg-[#212A37] focus:bg-[#212A37]"
              key={index}
              onClick={() => handleClickHistory(history)}
            >
              <p className="font-bold">
                {history.inputPertama}
                {history.inputKalkulasi}
                {history.inputKedua}
              </p>
              <p>{history.hasil}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default History;
