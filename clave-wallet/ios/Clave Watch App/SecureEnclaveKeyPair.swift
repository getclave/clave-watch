//  SecureEnclave.swift
//  Clave Watch App

import CryptoKit
import LocalAuthentication

class SecureEnclaveKeyPair {
  typealias SigningPrivateKey = SecureEnclave.P256.Signing.PrivateKey
  typealias P256Signature = P256.Signing.ECDSASignature
  
  let passwordStore = PasswordStore()
  let alias: String
  
  init(withAlias: String) {
    alias = withAlias
  }
  
  internal func createContext() throws -> LAContext {
    let context = LAContext()
    
    let hasBiometrics = context.canEvaluatePolicy(.deviceOwnerAuthentication, error: nil);
    guard hasBiometrics else {
      throw Errors.Unhandled
    }
    
    return context
  }
  
  internal func getPrivateKeyWithContext() throws -> SigningPrivateKey {
    let privKeyResult: SigningPrivateKey? = try self.passwordStore.get(alias: alias);
    guard let privKey = privKeyResult else { throw Errors.Unhandled}
    
    let context = try createContext()
    let key = try SigningPrivateKey(
      dataRepresentation: privKey.dataRepresentation,
      authenticationContext: context
    )
    
    return key;
  }
  
  
  func getPublicKey() throws -> String? {
    let privateKey: SigningPrivateKey? = try? passwordStore.get(alias: alias);
    guard privateKey != nil else {
      return nil
    }
    
    if #unavailable(iOS 14.0, OSX 11.0, tvOS 15.0, watchOS 8.0) {
      throw Errors.Unhandled;
    }
    
    let publicKey = privateKey!.publicKey.derRepresentation.hexEncodedString();
    return publicKey
  }
  
  func create() throws -> String {
//    Uncomment on real device
//    // Create access control
//    var accessError: SecurityError?;
//    let accessControl = SecAccessControlCreateWithFlags(
//      kCFAllocatorDefault,
//      kSecAttrAccessibleWhenUnlockedThisDeviceOnly,
//      [.privateKeyUsage, .userPresence],
//      &accessError
//    )!;
//    let privateKey = try SigningPrivateKey(accessControl: accessControl)
//    try passwordStore.set(privateKey, alias: alias)
//    return try getPublicKey()!
    
    let privateKey = try SigningPrivateKey()
    try passwordStore.set(privateKey, alias: alias)
    return try getPublicKey()!
  }
  
  func fetchOrCreate() throws -> String {
    let existing = try getPublicKey()
    if (existing != nil) {
      return existing!
    }
    return try create()
  }
  
  /// - Parameter message: Hex message
  func sign(message: String) throws -> String {
    let hexMessage = Data(fromHexEncodedString: message)!
    let key = try getPrivateKeyWithContext()
    let signature = try key.signature(for: hexMessage)
    let hexSignature = signature.derRepresentation.hexEncodedString()
    return hexSignature
  }
}
