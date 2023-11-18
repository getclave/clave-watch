import { NounsAvatar } from "clave-nouns-avatars";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen p-24">
      <NounsAvatar
        size={64}
        className="rounded-full"
        address="0xccaec61d44566fAE4bd1bdb47A92C5894bdE4eBF"
      />
    </div>
  );
}
