//  Extensions.swift
//  Clave Watch App
//  https://github.com/daimo-eth/daimo/blob/master/packages/daimo-expo-enclave/ios/Data%2BHex.swift

import Foundation
import CryptoKit

protocol StoreItem: CustomStringConvertible {
  /// Creates a key from a raw representation.
  init<D>(rawRepresentation data: D) throws where D: ContiguousBytes
  
  /// A raw representation of the key.
  var rawRepresentation: Data { get }
}

extension StoreItem {
    public var description: String {
        return self.rawRepresentation.withUnsafeBytes { bytes in
            return "Key representation contains \(bytes.count) bytes."
        }
    }
}

extension SecureEnclave.P256.Signing.PrivateKey: StoreItem {
    init<D>(rawRepresentation data: D) throws where D: ContiguousBytes {
        try self.init(dataRepresentation: data.dataRepresentation)
    }
    
    var rawRepresentation: Data {
        return dataRepresentation  // Contiguous bytes repackaged as a Data instance.
    }
}

extension P256.Signing.PrivateKey: StoreItem {}

extension ContiguousBytes {
    var dataRepresentation: Data {
        return self.withUnsafeBytes { bytes in
            let cfdata = CFDataCreateWithBytesNoCopy(nil, bytes.baseAddress?.assumingMemoryBound(to: UInt8.self), bytes.count, kCFAllocatorNull)
            return ((cfdata as NSData?) as Data?) ?? Data()
        }
    }
}

extension Data {
    struct HexEncodingOptions: OptionSet {
        let rawValue: Int
        static let upperCase = HexEncodingOptions(rawValue: 1 << 0)
    }

    func hexEncodedString(options: HexEncodingOptions = []) -> String {
        let format = options.contains(.upperCase) ? "%02hhX" : "%02hhx"
        return self.map { String(format: format, $0) }.joined()
    }
    
    init?(fromHexEncodedString string: String) {

            // Convert 0 ... 9, a ... f, A ...F to their decimal value,
            // return nil for all other input characters
            func decodeNibble(u: UInt8) -> UInt8? {
                switch(u) {
                case 0x30 ... 0x39:
                    return u - 0x30
                case 0x41 ... 0x46:
                    return u - 0x41 + 10
                case 0x61 ... 0x66:
                    return u - 0x61 + 10
                default:
                    return nil
                }
            }

            self.init(capacity: string.utf8.count/2)
            
            var iter = string.utf8.makeIterator()
            while let c1 = iter.next() {
                guard
                    let val1 = decodeNibble(u: c1),
                    let c2 = iter.next(),
                    let val2 = decodeNibble(u: c2)
                else { return nil }
                self.append(val1 << 4 + val2)
            }
        }
}
