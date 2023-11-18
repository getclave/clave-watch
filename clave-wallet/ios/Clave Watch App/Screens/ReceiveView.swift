//
//  ReceiveView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI

struct ReceiveView: View {
     
  
    var body: some View {
      VStack {
        Image("QR")
           .resizable()
           .scaledToFit()
           .frame(maxWidth: .infinity, maxHeight: .infinity)
           .padding(.bottom)
        Text("Scan QR Code to receive")
      }

    }
}

struct ReceiveView_Previews: PreviewProvider {
    static var previews: some View {
        ReceiveView()
    }
}
