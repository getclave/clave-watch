import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TransactionResponse } from 'zksync-web3/build/src/types';
import { BigNumber, ethers } from 'ethers';
import { Provider, Wallet, Contract, utils, EIP712Signer } from 'zksync-web3';
import { ABI } from './abi';
import { config } from 'dotenv';
config();

const privateKey = process.env.PV_KEY;

const factory = '0x8B1E8c09288fbdbE9CeE4856C7923C4fF555F4fE';
const gasPrice = BigNumber.from('0x0ee6b280');
const validatorAddress = '0x379f41Ab03B8e62A91aF1695fd70796ef51D4cfa';

export const derPublicToRaw = (derPublicKey: string): string => {
  const parsedHex = derPublicKey.slice(2);
  const rawPubKey = parsedHex.slice(54);
  return '0x' + rawPubKey;
};

const randomPostfix = String(Math.random() * 1000000000);

@Controller()
export class AppController {
  @Post('send')
  async postSend(
    @Body()
    {
      username,
      signature,
      to,
    }: {
      username: string;
      signature: string;
      to: string;
    },
  ) {
    console.log('HEREEEE');
    try {
      const provider = new Provider('https://testnet.era.zksync.dev');
      const salt = ethers.utils.keccak256(Buffer.from(username));
      const toSalt = ethers.utils.keccak256(Buffer.from(to));

      // const gasPrice = await provider.getGasPrice();
      const chainId = (await provider.getNetwork()).chainId;
      const zksyncWallet = new Wallet(privateKey, provider);
      const factoryContract = new Contract(factory, ABI.factory, zksyncWallet);
      const publicAddress = await factoryContract.getAddressForSalt(salt);
      const toPublicAddress = await factoryContract.getAddressForSalt(toSalt);
      const nonce = await provider.getTransactionCount(publicAddress);
      console.log('SEND POST', username, signature, publicAddress);

      const hexToBuffer = (hex: string): Buffer => {
        return Buffer.from(hex, 'hex');
      };
      const derBuffer = hexToBuffer(signature);

      console.log('derbuffer', derBuffer);

      const rLen = derBuffer[3];
      const rOffset = 4;
      const rBuffer = derBuffer.slice(rOffset, rOffset + rLen);
      const sLen = derBuffer[5 + rLen];
      const sOffset = 6 + rLen;
      const sBuffer = derBuffer.slice(sOffset, sOffset + sLen);

      console.log('rBuffer', rBuffer);
      console.log('sBuffer', sBuffer);

      const r = ethers.BigNumber.from(rBuffer);
      const s = ethers.BigNumber.from(sBuffer);

      console.log('BEFORE TX', r, s);

      const formatSignature = ethers.utils.defaultAbiCoder.encode(
        ['bytes', 'address', 'bytes[]'],
        [r._hex.concat(s._hex.slice(2)), validatorAddress, []],
      );

      const transaction = {
        data: '0x',
        to: toPublicAddress,
        from: publicAddress,
        value: ethers.utils.parseEther('0.0001'),
        chainId,
        nonce,
        type: 113,
        gasPrice,
        gasLimit: 100_000_0,
        customData: {
          gasPerPubdata: 100_000_0,
          customSignature: formatSignature,
        },
      };

      console.log('AFTER TX', transaction);
      const txnSend = await provider.sendTransaction(
        utils.serialize(transaction),
      );
      await txnSend.wait();

      console.log('TX RESPONSE', txnSend);

      return txnSend;
    } catch (err) {
      console.log(err);
    }
  }

  @Get('send')
  async getSend(@Query('username') username: string, @Query('to') to: string) {
    const provider = new Provider('https://testnet.era.zksync.dev');
    const salt = ethers.utils.keccak256(Buffer.from(username));
    const toSalt = ethers.utils.keccak256(Buffer.from(to));
    // const gasPrice = await provider.getGasPrice();
    const chainId = (await provider.getNetwork()).chainId;
    const zksyncWallet = new Wallet(privateKey, provider);
    const factoryContract = new Contract(factory, ABI.factory, zksyncWallet);
    const publicAddress = await factoryContract.getAddressForSalt(salt);
    const toPublicAddress = await factoryContract.getAddressForSalt(toSalt);
    const nonce = await provider.getTransactionCount(publicAddress);
    const transaction = {
      data: '0x',
      to: toPublicAddress,
      from: publicAddress,
      value: ethers.utils.parseEther('0.0001'),
      chainId,
      nonce,
      type: 113,
      gasLimit: 100_000_0,
      gasPrice,
      customData: {
        gasPerPubdata: 100_000_0,
      },
    };
    console.log(transaction, username);
    const signedTxHash = EIP712Signer.getSignedDigest(transaction).toString();
    console.log(signedTxHash);
    if (signedTxHash.startsWith('0x')) {
      return signedTxHash.slice(2);
    } else {
      return signedTxHash;
    }
  }

  @Post('deploy')
  async deploy(
    @Body() { username, pubkey }: { username: string; pubkey: string },
  ): Promise<TransactionResponse> {
    pubkey = derPublicToRaw('0x' + pubkey);
    console.log(username);
    const provider = new Provider('https://testnet.era.zksync.dev');

    const salt = ethers.utils.keccak256(Buffer.from(username));

    console.log(salt, pubkey);

    const SELECTOR = '0x6a85b968';
    const ABICODER = ethers.utils.defaultAbiCoder;
    const CALLDATA = ABICODER.encode(
      ['bytes', 'address', 'bytes[]', 'bytes[]'],
      [pubkey, validatorAddress, [], []],
    );

    const initializer = SELECTOR.toString() + CALLDATA.slice(2);

    const zksyncWallet = new Wallet(privateKey, provider);
    const factoryContract = new Contract(factory, ABI.factory, zksyncWallet);
    const tx = await factoryContract.deployAccount(salt, initializer, {
      gasLimit: 10_000_000,
    });
    await tx.wait();
    return tx;
  }
}
