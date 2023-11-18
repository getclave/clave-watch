import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionResponse } from 'zksync-web3/build/src/types';
import { ethers } from 'ethers';
import { Provider, Wallet, Contract, utils, EIP712Signer } from 'zksync-web3';
import { ABI } from './abi';

@Controller()
export class AppController {
  @Post('send')
  async postSend(@Body() username: string, signature: string) {
    const provider = new Provider('https://testnet.era.zksync.dev');
    const salt = ethers.utils.keccak256(Buffer.from(username));
    const gasPrice = await provider.getGasPrice();
    const chainId = (await provider.getNetwork()).chainId;
    const zksyncWallet = new Wallet('private-key', provider);
    const factoryContract = new Contract(
      '0xfb9DC9e56b1c9d02B84a08C538450D885cA26306',
      ABI.factory,
      zksyncWallet,
    );
    const publicAddress = await factoryContract.getAddressForSalt(salt);
    const nonce = await provider.getTransactionCount(publicAddress);

    const hexToBuffer = (hex: string): Buffer => {
      return Buffer.from(hex.slice(2), 'hex');
    };
    const derBuffer = hexToBuffer(signature);

    const rLen = derBuffer[3];
    const rOffset = 4;
    const rBuffer = derBuffer.slice(rOffset, rOffset + rLen);
    const sLen = derBuffer[5 + rLen];
    const sOffset = 6 + rLen;
    const sBuffer = derBuffer.slice(sOffset, sOffset + sLen);

    const r = ethers.BigNumber.from(rBuffer);
    const s = ethers.BigNumber.from(sBuffer);

    const transaction = {
      data: '0x',
      to: '0x94E9b636d0f3BDc08019B450F7f2F4Ef5b4eb2Ca',
      from: publicAddress,
      value: ethers.utils.parseEther('0.001'),
      chainId,
      nonce,
      type: 113,
      gasPrice,
      customData: {
        gasPerPubdata: 10_000_000,
        customSignature: r._hex.concat(s._hex.slice(2)),
      },
    };
    const txnSend = await provider.sendTransaction(
      utils.serialize(transaction),
    );

    return txnSend;
  }

  @Get('send')
  async getSend(@Body() username: string) {
    const provider = new Provider('https://testnet.era.zksync.dev');
    const salt = ethers.utils.keccak256(Buffer.from(username));
    const gasPrice = await provider.getGasPrice();
    const chainId = (await provider.getNetwork()).chainId;
    const zksyncWallet = new Wallet('private-key', provider);
    const factoryContract = new Contract(
      '0xfb9DC9e56b1c9d02B84a08C538450D885cA26306',
      ABI.factory,
      zksyncWallet,
    );
    const publicAddress = await factoryContract.getAddressForSalt(salt);
    const nonce = await provider.getTransactionCount(publicAddress);
    const transaction = {
      data: '0x',
      to: '0x94E9b636d0f3BDc08019B450F7f2F4Ef5b4eb2Ca',
      from: publicAddress,
      value: ethers.utils.parseEther('0.001'),
      chainId,
      nonce,
      type: 113,
      gasPrice,
      customData: {
        gasPerPubdata: 10_000_000,
      },
    };
    const signedTxHash = EIP712Signer.getSignedDigest(transaction).toString();

    if (signedTxHash.startsWith('0x')) {
      return signedTxHash.slice(2);
    } else {
      return signedTxHash;
    }
  }

  @Post('deploy')
  async deploy(
    @Body() username: string,
    pubkey: string,
  ): Promise<TransactionResponse> {
    const provider = new Provider('https://testnet.era.zksync.dev');

    const salt = ethers.utils.keccak256(Buffer.from(username));
    const SELECTOR = '0x6a85b968';
    const ABICODER = ethers.utils.defaultAbiCoder;
    const CALLDATA = ABICODER.encode(
      ['bytes', 'address', 'bytes[]', 'bytes[]'],
      [pubkey, '0x379f41Ab03B8e62A91aF1695fd70796ef51D4cfa', [], []],
    );

    const initializer = SELECTOR.toString() + CALLDATA.slice(2);
    const zksyncWallet = new Wallet('private-key', provider);
    const factoryContract = new Contract(
      '0xfb9DC9e56b1c9d02B84a08C538450D885cA26306',
      ABI.factory,
      zksyncWallet,
    );
    const tx = await factoryContract.deployAccount(salt, initializer, {
      gasLimit: 10_000_000,
    });
    return tx;
  }
}
