//  Errors.swift
//  Clave Watch App

import Foundation

enum Errors: Error {
  case Unhandled
}

extension OSStatus {
    /// A human readable message for the status.
    var message: String {
        return (SecCopyErrorMessageString(self, nil) as String?) ?? String(self)
    }
}

typealias SecurityError = Unmanaged<CFError>
