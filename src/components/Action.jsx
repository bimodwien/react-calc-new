import React from "react";
import { useAction } from "../context/ActionContext";

const Action = () => {
  const {
    setAngka: angka,
    onHandleAction: handleAction,
    onHandleClear: handleClear,
    onHandlePercent: handlePercent,
    onHandlePlusMinus: handlePlusMinus,
  } = useAction();
  return (
    <>
      <div className={`grid grid-cols-4 h-full`}>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={handlePlusMinus}
        >
          +/-
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={handlePercent}
        >
          %
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => handleAction("/")}
        >
          /
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("7")}
        >
          7
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("8")}
        >
          8
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("9")}
        >
          9
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => handleAction("*")}
        >
          x
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("4")}
        >
          4
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("5")}
        >
          5
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("6")}
        >
          6
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => handleAction("-")}
        >
          -
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("1")}
        >
          1
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("2")}
        >
          2
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka("3")}
        >
          3
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => handleAction("+")}
        >
          +
        </button>
        <button
          className="border border-[#FAF9F6] col-span-2 flex justify-center items-center hover:bg-[#212A37]"
          onClick={() => angka("0")}
        >
          0
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => angka(".")}
        >
          .
        </button>
        <button
          className="border border-[#FAF9F6] flex justify-center items-center hover:bg-[#212A37] h-full"
          onClick={() => handleAction("=")}
        >
          =
        </button>
      </div>
    </>
  );
};

export default Action;
