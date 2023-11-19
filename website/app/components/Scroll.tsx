"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type ScrollProps = {
  width: number;
};
const Scroll = ({ width }: ScrollProps) => {
  const height = width / (16 / 9);
  return (
    <div className="h-[20vh] flex items-center justify-center flex-col relative pt-56">
      <img
        src="watches.png"
        alt="watches"
        style={{ width: `${width}px` }}
        // className={`h-[${Number(width / (16 / 9))}px] w-[${Number(width)}px]`}
      />
    </div>
  );
};

export { Scroll };
