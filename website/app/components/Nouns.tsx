import { useEffect, useState } from "react";

const Nouns = () => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 12) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="h-[100vh] flex items-center justify-center flex-col">
      <div className="w-full relative mb-[650px]">
        <div className="h-[600px] absolute left-0 top-0">
          <img src="nouns.png" alt="nouns" />
          <div className="absolute right-32 top-32">
            <img src={`/${index}.png`} className="w-[320px]" />
          </div>
        </div>
      </div>
      <div className="text-2xl text-white max-w-2xl text-center">
        Smartwatch wallets enable easy, secure, on-the-go financial management
        and contactless payments.
      </div>
    </div>
  );
};

export { Nouns };
