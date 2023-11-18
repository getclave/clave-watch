//
//  ReceiveView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI

struct SendView: View {
    @State private var username: String = ""
  
    var body: some View {
      VStack {
        TextField("Send", text: $username)
      }
    }
}

struct SendView_Previews: PreviewProvider {
    static var previews: some View {
        SendView()
    }
}
