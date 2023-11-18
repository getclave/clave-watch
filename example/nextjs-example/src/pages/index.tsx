import { NounsAvatar } from "clave-nouns-avatars";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen p-10">
      <NounsAvatar size={120} address="asasf" />
    </div>
  );
}
