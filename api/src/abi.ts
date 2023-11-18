/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
export const ABI = {
  factory: [
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '_proxyBytecodeHash',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'DEPLOYMENT_FAILED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INITIALIZATION_FAILED',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'accountAddress',
          type: 'address',
        },
      ],
      name: 'NewClaveAccount',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'initializer',
          type: 'bytes',
        },
      ],
      name: 'deployAccount',
      outputs: [
        {
          internalType: 'address',
          name: 'accountAddress',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
      ],
      name: 'getAddressForSalt',
      outputs: [
        {
          internalType: 'address',
          name: 'accountAddress',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxyBytecodeHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  socialRecovery: [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint128',
          name: 'minTimelock',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'minThreshold',
          type: 'uint128',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'ALREADY_INITED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'GUARDIANS_MUST_BE_SORTED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INSUFFICIENT_GUARDIANS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_GUARDIAN',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_RECOVERY_CONFIG',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_RECOVERY_NONCE',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidShortString',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_IN_PROGRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_NOT_INITED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_NOT_STARTED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_TIMELOCK',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'str',
          type: 'string',
        },
      ],
      name: 'StringTooLong',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Disabled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Inited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
      ],
      name: 'RecoveryExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timelockExpiry',
          type: 'uint256',
        },
      ],
      name: 'RecoveryStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'RecoveryStopped',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint128',
              name: 'timelock',
              type: 'uint128',
            },
            {
              internalType: 'uint128',
              name: 'threshold',
              type: 'uint128',
            },
            {
              internalType: 'address[]',
              name: 'guardians',
              type: 'address[]',
            },
          ],
          indexed: false,
          internalType: 'struct SocialRecoveryModule.RecoveryConfig',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'UpdateConfig',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MIN_THRESHOLD',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MIN_TIMELOCK',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'disable',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        {
          internalType: 'bytes1',
          name: 'fields',
          type: 'bytes1',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'chainId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'verifyingContract',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
        {
          internalType: 'uint256[]',
          name: 'extensions',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recoveringAddress',
          type: 'address',
        },
      ],
      name: 'executeRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'recoveringAddress',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'newOwner',
              type: 'bytes',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
          ],
          internalType: 'struct BaseRecovery.RecoveryData',
          name: 'recoveryData',
          type: 'tuple',
        },
      ],
      name: 'getEip712Hash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getGuardians',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getThreshold',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getTimelock',
      outputs: [
        {
          internalType: 'uint128',
          name: '',
          type: 'uint128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'initData',
          type: 'bytes',
        },
      ],
      name: 'init',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'isInited',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'isRecovering',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'recoveryDataTypeHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'recoveryNonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'recoveryStates',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timelockExpiry',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'recoveringAddress',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'newOwner',
              type: 'bytes',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
          ],
          internalType: 'struct BaseRecovery.RecoveryData',
          name: 'recoveryData',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'guardian',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
          ],
          internalType: 'struct SocialRecoveryModule.GuardianData[]',
          name: 'guardianData',
          type: 'tuple[]',
        },
      ],
      name: 'startRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stopRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint128',
              name: 'timelock',
              type: 'uint128',
            },
            {
              internalType: 'uint128',
              name: 'threshold',
              type: 'uint128',
            },
            {
              internalType: 'address[]',
              name: 'guardians',
              type: 'address[]',
            },
          ],
          internalType: 'struct SocialRecoveryModule.RecoveryConfig',
          name: 'config',
          type: 'tuple',
        },
      ],
      name: 'updateConfig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  cloudRecovery: [
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'recoveringAddress',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'newOwner',
              type: 'bytes',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
          ],
          internalType: 'struct BaseRecovery.RecoveryData',
          name: 'recoveryData',
          type: 'tuple',
        },
      ],
      name: 'getEip712Hash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'timelock',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'ALREADY_INITED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_GUARDIAN_SIGNATURE',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_RECOVERY_NONCE',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidShortString',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_IN_PROGRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_NOT_INITED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_NOT_STARTED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECOVERY_TIMELOCK',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'str',
          type: 'string',
        },
      ],
      name: 'StringTooLong',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ZERO_ADDRESS_GUARDIAN',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Disabled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Inited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
      ],
      name: 'RecoveryExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timelockExpiry',
          type: 'uint256',
        },
      ],
      name: 'RecoveryStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'RecoveryStopped',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'guardian',
          type: 'address',
        },
      ],
      name: 'UpdateGuardian',
      type: 'event',
    },
    {
      inputs: [],
      name: 'TIMELOCK',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'getGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'disable',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        {
          internalType: 'bytes1',
          name: 'fields',
          type: 'bytes1',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'chainId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'verifyingContract',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
        {
          internalType: 'uint256[]',
          name: 'extensions',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recoveringAddress',
          type: 'address',
        },
      ],
      name: 'executeRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'initData',
          type: 'bytes',
        },
      ],
      name: 'init',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'isInited',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'isRecovering',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'recoveryDataTypeHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'recoveryNonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'recoveryStates',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timelockExpiry',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newOwner',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'recoveringAddress',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'newOwner',
              type: 'bytes',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
          ],
          internalType: 'struct BaseRecovery.RecoveryData',
          name: 'recoveryData',
          type: 'tuple',
        },
        {
          internalType: 'bytes',
          name: 'signature',
          type: 'bytes',
        },
      ],
      name: 'startRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stopRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'guardian',
          type: 'address',
        },
      ],
      name: 'updateGuardian',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  account: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'batchCaller',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'ADDRESS_ALREADY_EXISTS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ADDRESS_NOT_EXISTS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BYTES_ALREADY_EXISTS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BYTES_NOT_EXISTS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'EMPTY_HOOK_ADDRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'EMPTY_MODULE_ADDRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'EMPTY_R1_OWNERS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'EMPTY_R1_VALIDATORS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FEE_PAYMENT_FAILED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'HOOK_ERC165_FAIL',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INSUFFICIENT_FUNDS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_ADDRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_BYTES',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_HOOK_ADDRESS',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_KEY',
      type: 'error',
    },
    {
      inputs: [],
      name: 'INVALID_PUBKEY_LENGTH',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MODULE_ERC165_FAIL',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NOT_FROM_BOOTLOADER',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NOT_FROM_HOOK',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NOT_FROM_MODULE',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NOT_FROM_SELF',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NOT_FROM_SELF_OR_MODULE',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RECUSIVE_MODULE_CALL',
      type: 'error',
    },
    {
      inputs: [],
      name: 'SAME_IMPLEMENTATION',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UNAUTHORIZED_OUTSIDE_TRANSACTION',
      type: 'error',
    },
    {
      inputs: [],
      name: 'VALIDATION_HOOK_FAILED',
      type: 'error',
    },
    {
      inputs: [],
      name: 'VALIDATOR_ERC165_FAIL',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'hook',
          type: 'address',
        },
      ],
      name: 'AddHook',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'AddModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'K1AddOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'K1AddValidator',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'K1RemoveOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'K1RemoveValidator',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'R1AddOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'R1AddValidator',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'R1RemoveOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'R1RemoveValidator',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'hook',
          type: 'address',
        },
      ],
      name: 'RemoveHook',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'RemoveModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'ResetOwners',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'hookAndData',
          type: 'bytes',
        },
      ],
      name: 'addHook',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'moduleAndData',
          type: 'bytes',
        },
      ],
      name: 'addModule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'executeFromModule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'txType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'from',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'to',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasPerPubdataByteLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxPriorityFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'paymaster',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256[4]',
              name: 'reserved',
              type: 'uint256[4]',
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
            {
              internalType: 'bytes32[]',
              name: 'factoryDeps',
              type: 'bytes32[]',
            },
            {
              internalType: 'bytes',
              name: 'paymasterInput',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'reservedDynamic',
              type: 'bytes',
            },
          ],
          internalType: 'struct Transaction',
          name: 'transaction',
          type: 'tuple',
        },
      ],
      name: 'executeTransaction',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'txType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'from',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'to',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasPerPubdataByteLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxPriorityFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'paymaster',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256[4]',
              name: 'reserved',
              type: 'uint256[4]',
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
            {
              internalType: 'bytes32[]',
              name: 'factoryDeps',
              type: 'bytes32[]',
            },
            {
              internalType: 'bytes',
              name: 'paymasterInput',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'reservedDynamic',
              type: 'bytes',
            },
          ],
          internalType: 'struct Transaction',
          name: 'transaction',
          type: 'tuple',
        },
      ],
      name: 'executeTransactionFromOutside',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'hook',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'key',
          type: 'bytes32',
        },
      ],
      name: 'getHookData',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'implementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'initialR1Owner',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'initialR1Validator',
          type: 'address',
        },
        {
          internalType: 'bytes[]',
          name: 'modules',
          type: 'bytes[]',
        },
        {
          internalType: 'bytes[]',
          name: 'hooks',
          type: 'bytes[]',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'isHook',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'isModule',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'k1AddOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'k1AddValidator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'k1IsOwner',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'k1IsValidator',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'k1ListOwners',
      outputs: [
        {
          internalType: 'address[]',
          name: 'k1OwnerList',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'k1ListValidators',
      outputs: [
        {
          internalType: 'address[]',
          name: 'validatorList',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'k1RemoveOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'k1RemoveValidator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'listHooks',
      outputs: [
        {
          internalType: 'address[]',
          name: 'hookList',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'listModules',
      outputs: [
        {
          internalType: 'address[]',
          name: 'moduleList',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'txType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'from',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'to',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasPerPubdataByteLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxPriorityFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'paymaster',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256[4]',
              name: 'reserved',
              type: 'uint256[4]',
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
            {
              internalType: 'bytes32[]',
              name: 'factoryDeps',
              type: 'bytes32[]',
            },
            {
              internalType: 'bytes',
              name: 'paymasterInput',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'reservedDynamic',
              type: 'bytes',
            },
          ],
          internalType: 'struct Transaction',
          name: 'transaction',
          type: 'tuple',
        },
      ],
      name: 'payForTransaction',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'txType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'from',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'to',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasPerPubdataByteLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxPriorityFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'paymaster',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256[4]',
              name: 'reserved',
              type: 'uint256[4]',
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
            {
              internalType: 'bytes32[]',
              name: 'factoryDeps',
              type: 'bytes32[]',
            },
            {
              internalType: 'bytes',
              name: 'paymasterInput',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'reservedDynamic',
              type: 'bytes',
            },
          ],
          internalType: 'struct Transaction',
          name: 'transaction',
          type: 'tuple',
        },
      ],
      name: 'prepareForPaymaster',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'r1AddOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'r1AddValidator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'r1IsOwner',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'r1IsValidator',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'r1ListOwners',
      outputs: [
        {
          internalType: 'bytes[]',
          name: 'r1OwnerList',
          type: 'bytes[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'r1ListValidators',
      outputs: [
        {
          internalType: 'address[]',
          name: 'validatorList',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'r1RemoveOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'validator',
          type: 'address',
        },
      ],
      name: 'r1RemoveValidator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'hook',
          type: 'address',
        },
      ],
      name: 'removeHook',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'removeModule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'pubKey',
          type: 'bytes',
        },
      ],
      name: 'resetOwners',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'key',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'setHookData',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'suggestedSignedHash',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'txType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'from',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'to',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'gasPerPubdataByteLimit',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxPriorityFeePerGas',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'paymaster',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256[4]',
              name: 'reserved',
              type: 'uint256[4]',
            },
            {
              internalType: 'bytes',
              name: 'data',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'signature',
              type: 'bytes',
            },
            {
              internalType: 'bytes32[]',
              name: 'factoryDeps',
              type: 'bytes32[]',
            },
            {
              internalType: 'bytes',
              name: 'paymasterInput',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'reservedDynamic',
              type: 'bytes',
            },
          ],
          internalType: 'struct Transaction',
          name: 'transaction',
          type: 'tuple',
        },
      ],
      name: 'validateTransaction',
      outputs: [
        {
          internalType: 'bytes4',
          name: 'magic',
          type: 'bytes4',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
  registry: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'NOT_FROM_FACTORY',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'isClave',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'register',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'factory_',
          type: 'address',
        },
      ],
      name: 'setFactory',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
};
