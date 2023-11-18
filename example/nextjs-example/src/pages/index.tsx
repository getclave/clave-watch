import { NounsAvatar } from "clave-nouns-avatars";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen space-x-4 bg-white flex items-end p-24">
      <NounsAvatar
        size={128}
        className="rounded-full"
        address="0x94E9b636d0f3BDc08019B450F7f2F4Ef5b4eb2Ca"
      />

      <NounsAvatar
        size={96}
        className="rounded-full"
        address="0x72772e72abf1b67dd4e669dc5bf526c16261cdb9"
      />

      <NounsAvatar
        size={84}
        className="rounded-full"
        address="0x49973fe54447873136d64ca7d7e2f7b417745778"
      />

      <NounsAvatar
        size={72}
        className="rounded-full"
        address="0x87e8772d8b5fc3dbff0b30d879f07835515b9adf"
      />

      <NounsAvatar
        size={64}
        className="rounded-full"
        address="0x3757c2d875567cee108b7c24269247794001aa97"
      />

      <NounsAvatar
        size={48}
        className="rounded-full"
        address="0x8d27e3bb104d504d6b8aadcfdab5605ff51367bb"
      />
    </div>
  );
}
