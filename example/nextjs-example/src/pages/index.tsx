import { NounsAvatar } from "clave-nouns-avatars";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen p-24">
      <NounsAvatar
        size={128}
        className="rounded-full"
        address="0x94E9b636d0f3BDc08019B450F7f2F4Ef5b4eb2Ca"
      />
    </div>
  );
}
