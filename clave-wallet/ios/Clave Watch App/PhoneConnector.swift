//
//  PhoneConnector.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import WatchKit
import WatchConnectivity


final class PhoneConnector: NSObject {
  var session: WCSession
  
  init (session: WCSession = .default) {
    self.session = session
    super.init ()
    if WCSession.isSupported() {
      session.delegate = self
      session.activate()
    }
  }
}

extension PhoneConnector: WCSessionDelegate {
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState,
               error: Error?) {
  }
}
