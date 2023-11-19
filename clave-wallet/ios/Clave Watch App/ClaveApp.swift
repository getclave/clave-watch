//
//  ClaveApp.swift
//  Clave Watch App
//
//  Created by asgarovf on 17.11.2023.
//

import SwiftUI

@main
struct Clave_Watch_AppApp: App {
  @StateObject var wallet = Wallet()
  
  var body: some Scene {
    WindowGroup {
      ContentView().environmentObject(wallet)
    }
  }
}
