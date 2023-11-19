![Clave Watch](https://i.imgur.com/oFoeOsm.png)



# Introduction

If you've used Ethereum, you likely faced uncertainty on storing your 12-word seed phrase during your initial wallet setup. Additionally, if you established a wallet and engaged in transactions during bullish market periods, the incurred gas fees might have been unexpected. We've developed a smart contract wallet that optimally utilizes Account Abstraction, Secure Enclave on Apple Watch, and zkSync's native Account Abstraction to enhance the user experience on blockchains. We aim to propose an alternative payment solution to real-world payments.  Our wallet enables transaction initiation on zkSync through the secure enclave provided by Apple on watchOS.


## Account Abstraction:

Ownership in EOA wallets is proven with a set of hardcoded transaction validity rules. Account Abstraction is a couple of updates aimed at making these validity rules programmable. Users can send batched transactions, set guardians for their wallet, and have many more benefits with zkSync’s Native Account Abstraction.

## Apple Secure Enclave:

One of our core concepts is to turn our Apple devices, iPhones and watches, into hardware wallets. How? Apple Secure Enclave is a subsystem that is implemented into Apple’s Chip System. The Secure Enclave is isolated from the main processor to create an isolated secure area for users’ important data. The main use case of the Secure Enclave is to keep user data even if the main processor becomes compromised. It also has a Public Key Accelerator which enables developers to build asymmetric cryptography operations at the Secure Enclave. Since the Secure Enclave can not be accessed by the main processor and other components of the hardware, performing ECC (Elliptic Curve Cryptography) at the Secure Enclave could turn our device into a hardware wallet.

The Secure Enclave is a great security solution to implement to the wallets and abstract the accounts by the signatures. The Secure Enclave only supports the “secp256r1 curve”, whereas Ethereum supports the “secp256k1 curve”. Therefore, we needed some custom solutions to implement Apple signatures to blockchain.
Using the custom precompile could allow us to lower the gas fees for transactions. So now, we have a wallet that can initiate transactions from a Trusted Execution Environment (Secure Enclave) with guaranteed security. Even so, it’s not enough to improve the UX of the wallets. Still, we can implement more features to account abstraction wallet to enrich the capabilities of the EOA wallets. We have implemented several futures to our wallet implementation to reach a secure account model with rich experience.
Account Abstraction via zkSync’s Native Account Abstraction opens the door to build smart contract wallets without any trust assumption. So we have developed various applications that use AA.


## How it's made?

**Clave Watch** uses the power of zkSync's Account Abstraction, Secure Enclave and Clave Wallet contracts to bring Web3 payments to Apple Watches. We built several components to accomplish the AA Wallet on WatchOS.

**API**:
NestJS microsevice bridge to easily prepare transactions with zksync-web3. Preparing transactions in Swift was huge problem for us, since the pre-existing work were not enough for us. Therefore, we built an Javascript bridge API to make necessary transformations and pass public data between Watch app and Smart Contracts.

**Wallet**:
 WatchOS app with SwiftUI. We natively implemented user interface for our Watch Wallet to accomplish simple features like Account Deployment, Token Send and Receive.


**Website**:
 Landing page with NextJS is built to display initial information about our application.

**Nouns DAO Avatars**:
We also built an open-source library to display Nouns DAO components as profile avatars. The library is written with Typescript and React, being published on NPM as open-source package.



 ## Team Members

| Team Member                                           | Role            |
| ----------------------------------------------------- | --------------- |
| [Farhad Asgarov](https://twitter.com/asgarovf)        | Full stack      |
| [Rafi Ersözlü](https://twitter.com/rafierszl)         | Full stack      |
| [Bahri Bugra Meydan](https://twitter.com/weckleth)    | Research        |
| [Eylul Sahin](https://twitter.com/eyllshn007)         | Designer        |
