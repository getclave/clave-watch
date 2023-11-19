//
//  ReceiveView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI


struct SendView: View {
    @State private var username: String = ""
    @State private var amount: Double = 0.0
    @EnvironmentObject var wallet: Wallet;
  
    @State private var isTxSuccessful = false
  
    func sendTx() -> Void {
      Task {
        do {
          
          try await wallet.send(username: wallet.username ?? "", to: username, amount: amount)
          isTxSuccessful = true
        } catch {
          debugPrint(error.localizedDescription)
        }
      }
      
    }
  
    var body: some View {
      VStack {
        
          Rectangle()
          .frame(width: 100, height: 48) // Adjust the size as needed
          .foregroundColor(.clear) // Set fill color to clear for an empty box
          .overlay(Rectangle().stroke(Color.black, lineWidth: 1))
        
          TextField("Username / ENS", text: $username).padding(.top)
          
          Text("Amount (ETH):")
          
          Text("\(amount)")
                   .focusable(true)
                   .digitalCrownRotation($amount, from: 0, through: 10, by: 0.0001, sensitivity: .low).padding()
      
          Button("Send") {
            sendTx()
          }
          .frame(height: 48)
          .background(Color.primaryTeal)
          .foregroundColor(.white)
          .cornerRadius(30)
      
      }
      
      NavigationLink("", destination: TxSuccessView(), isActive: $isTxSuccessful)
        .hidden()
    }

}

struct SendView_Previews: PreviewProvider {
    static var previews: some View {
        SendView()
    }
}
