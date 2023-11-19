//  PasswordStore.swift
//  Clave Watch App

import Foundation
import Security

let KEYCHAIN_STORE_PREFIX = "com.ethglobal.istanbul."

struct PasswordStore {
  /// Sets a CryptoKit key for the given alias
  func set<T: StoreItem>(_ key: T, alias: String) throws {
    // Treat the key data as a generic password.
    let query = [
      kSecClass: kSecClassGenericPassword,
      kSecAttrAccount: KEYCHAIN_STORE_PREFIX + alias,
      kSecAttrAccessible: kSecAttrAccessibleWhenUnlocked,
      kSecUseDataProtectionKeychain: true,
      kSecValueData: key.rawRepresentation
    ] as CFDictionary
    
    // Add the key data.
    let status = SecItemAdd(query, nil)
    guard status == errSecSuccess else {
      throw Errors.Unhandled
    }
  }
  
  /// Reads the CryptoKit for the given alias
  func get<T: StoreItem>(alias: String) throws -> T? {
    // Seek a generic password with the given account.
    let query = [
      kSecClass: kSecClassGenericPassword,
      kSecAttrAccount: KEYCHAIN_STORE_PREFIX + alias,
      kSecUseDataProtectionKeychain: true,
      kSecReturnData: true
    ] as CFDictionary
    
    // Find and cast the result as data.
    var item: CFTypeRef?
    switch SecItemCopyMatching(query, &item) {
    case errSecSuccess:
      guard let data = item as? Data else { return nil }
      guard let dataConverted = try? T(rawRepresentation: data) else {
        throw Errors.Unhandled
      }
      return dataConverted
    case errSecItemNotFound: return nil
    default:
      throw Errors.Unhandled
    }
  }
  
  /// Deletes the key of the alias
  func delete(alias: String) throws {
    // Create query for deletion
    let query = [
      kSecClass: kSecClassGenericPassword,
      kSecUseDataProtectionKeychain: true,
      kSecAttrAccount: KEYCHAIN_STORE_PREFIX + alias
    ] as CFDictionary
    
    switch SecItemDelete(query) {
    case errSecItemNotFound, errSecSuccess: break // Okay to ignore
    default:
      throw Errors.Unhandled
    }
  }
}
