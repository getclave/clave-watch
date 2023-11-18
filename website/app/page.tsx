/* eslint-disable @next/next/no-img-element */
export default function Home() {
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
          <img src="threeline.png" alt="three-line" className="-translate-y-24 -translate-x-24" />
        </div>
        <div className="flex justify-center -translate-y-14">
          <a href="" target="_blank">
            <img src="eth.png" alt="eth" className="w-44 hover:cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="h-[100vh]">
        <div className="w-[94%] mx-auto relative">
          <p className="text-white tracking-widest whitespace-nowrap break-keep text-[134px] text-center leading-none">
            CRYPTO PAYMENT
          </p>
          <p className="text-[#922594] text-right w-[98%] text-3xl leading-none tracking-widest">
            on your wrist.
          </p>
          <img
            src="watch.png"
            alt="watch"
            className="absolute top-1/2 left-1/2 -translate-x-64 -translate-y-16"
          />
        </div>
      </div>
    </>
  );
}
