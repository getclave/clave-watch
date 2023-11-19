/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { ContentBox } from "./components/ContentBox";
import { Nouns } from "./components/Nouns";
import { Scroll } from "./components/Scroll";
export default function Home() {
  const [width, setWidth] = useState(1000);

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const fixedHeight = 300;
    const offsetHeight = viewportHeight + fixedHeight;

    const newPosition = window.scrollY - offsetHeight;

    const newWidth = Math.max(500, 1000 - (5 * newPosition) / 2);
    if (newWidth >= 1000) {
      setWidth(1000);
    } else if (newWidth <= 500) {
      setWidth(500);
    } else {
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contents = [
    {
      title: "Account Abstraction",
      description:
        "Standardizes Ethereum account functionalities for a simplified user experience.",
    },
    {
      title: "Secure Enclave",
      description:
        "Advanced hardware-based security to protect sensitive data and processes.",
    },
    {
      title: `Direct Payment`,
      description:
        "Streamlined, secure transactions ensuring immediate transfer of funds.",
    },
  ];
  return (
    <>
      <div className="h-[100vh]">
        <img
          src="first.png"
          alt="bg"
          className="absolute top-0 -z-10 left-0 max-h-[100vh] w-[100vw] object-cover"
        />
        <div className="z-10 flex items-center justify-center mt-48 translate-x-20">
          <p className="text-white text-8xl">Clave Watch</p>
          <img
            src="threeline.png"
            alt="three-line"
            className="-translate-y-24 -translate-x-24"
          />
        </div>
        <div className="flex justify-center -translate-y-14">
          <a
            href="https://ethglobal.com/showcase/clave-watch-fyqey"
            target="_blank"
          >
            <img
              src="eth.png"
              alt="eth"
              className="w-44 hover:cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="h-[300px]">
        <div className="w-[94%] mx-auto relative">
          <p className="text-white tracking-widest whitespace-nowrap break-keep text-[134px] text-center leading-none">
            CRYPTO PAYMENT
          </p>
          <p className="text-[#922594] text-right w-[98%] text-3xl leading-none tracking-widest">
            on your wrist.
          </p>
          {/* <img
            src="watch.png"
            alt="watch"
            className="absolute top-1/2 left-1/2 -translate-x-64 -translate-y-16"
          /> */}
        </div>
      </div>
      <Scroll width={width} />

      <div className="h-[100vh] flex items-center w-full justify-center gap-7">
        {contents.map((content, i) => {
          return (
            <ContentBox
              key={i}
              title={content.title}
              description={content.description}
            />
          );
        })}
      </div>
      <Nouns />
    </>
  );
}
