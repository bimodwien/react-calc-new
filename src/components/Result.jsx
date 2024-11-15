import React from "react";

const Result = () => {
  return (
    <>
      <div className="p-2">
        <h1 className="text-3xl font-semibold">Calculator</h1>
      </div>
      <div className="h-[480px] border-b-2 border-[#FAF9F6] flex flex-col justify-end items-end p-2">
        <h1 className="text-5xl subpixel-antialiased font-bold pb-2 text-[#B7B7B7] tracking-wide">
          2000
        </h1>
        <h4 className="text-2xl subpixel-antialiased font-semibold pb-1 tracking-tight">
          200 x 10 =
        </h4>
      </div>
    </>
  );
};

export default Result;
