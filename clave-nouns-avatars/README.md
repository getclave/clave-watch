# Clave Nouns Avatars

<img src="https://i.imgur.com/IEXbYnO.png" width="64px">

This library helps you to use Nouns as React components in your code. There are always need for representing users unuiquely with their avatars, like Emojis in smartphones. Nouns provides a great alternative for web3 world to represent every user with different combination of Noun parts such as glasses, head, bodies, accessory and backgrounds.

Built in [ETHGlobal Istanbul Hackathon](https://ethglobal.com/events/istanbul/prizes#nouns-dao) for Nouns DAO as Public Good.

# Example

[https://codepen.io/Farhad-Asgarov/pen/YzBezJG](https://codepen.io/Farhad-Asgarov/pen/YzBezJG).

<img src="https://i.imgur.com/ackj7cK.png" width="400px">

# Installation

```bash
npm install clave-nouns-avatars
```

# Usage

```tsx
import { NounsAvatar } from "clave-nouns-avatars";

const MyComponent = () => {
  return (
    <NounsAvatar
      size={128}
      address="0x94E9b636d0f3BDc08019B450F7f2F4Ef5b4eb2Ca"
    />
  );
};
```

# Props

```tsx
interface Props
  extends Omit<ComponentPropsWithoutRef<"div">, "dangerouslySetInnerHTML"> {
  size: number; // Size of the Avatar
  address: string; // 20 Byte Public Adress
}
```
