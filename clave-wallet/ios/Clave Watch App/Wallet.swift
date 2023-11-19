//  Wallet.swift
//  Clave Watch App

import Foundation
import Alamofire

struct DeployResponse: Decodable { let hash: String }
struct SendResponse: Decodable { let hash: String }

public class Wallet: ObservableObject {
  let apiUrl = "http://localhost:8000"
  var keyPair: SecureEnclaveKeyPair?
  @Published var username: String?
  
  
  public func setKeyPair(username: String) {
    keyPair = SecureEnclaveKeyPair(withAlias: username)
    self.username = username
  }
  
  public func deploy(username: String) async throws {
    let publicKey = try keyPair!.fetchOrCreate()
    
    let txData = try await AF.request("\(apiUrl)/deploy",
                                      method: .post,
                                      parameters: ["username": username, "pubkey": publicKey],
                                      encoding: JSONEncoding.prettyPrinted
    )
      .serializingDecodable(DeployResponse.self)
      .value
    
    debugPrint(txData)
  }
  
  func getHashedTransaction(username: String, to: String) async throws -> String {
//    let typeHash = try await AF.request("\(apiUrl)/send?username=\(username)",
//                                        method: .get
//    )
//      .serializingDecodable(String.self)
//      .value
    
    let typeHash = try await AF.request("\(apiUrl)/send?username=\(username)&to=\(to)",
                                           method: .get
    ).serializingString().value
    
    debugPrint(typeHash)

    
    return typeHash
  }
  
  public func send(username: String, to: String) async throws {
    let typeHash = try await getHashedTransaction(username: username, to: to)
    let signature = try keyPair!.sign(message: typeHash)
    
    let txData = try await AF.request("\(apiUrl)/send",
                                      method: .post,
                                      parameters: ["username": username, "signature": signature, "to": to],
                                      encoding: JSONEncoding.prettyPrinted
    )
      .serializingDecodable(SendResponse.self)
      .value
    
    debugPrint(txData)
  }
}
