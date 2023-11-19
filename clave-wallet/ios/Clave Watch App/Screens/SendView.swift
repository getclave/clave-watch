//
//  ReceiveView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI


struct SendView: View {
    @State private var username: String = ""
    @State private var amount: String = "0.0"
    @EnvironmentObject var wallet: Wallet;
  
    @State private var isTxSuccessful = false
  
    func sendTx() -> Void {
      Task {
        do {
          
          try await wallet.send(username: wallet.username ?? "", to: username)
          isTxSuccessful = true
        } catch {
          debugPrint(error.localizedDescription)
        }
      }
      
    }
  
    var body: some View {
      VStack {
        ScrollView {
          Spacer(minLength: 24)
          
          TextField("Username / ENS", text: $username)
          
          TextField("Amount", text: $amount).font(.system(size: 24))
      
          Button("Send") {
            sendTx()
          }
          .padding()
          .frame(height: 48)
          .background(Color.primaryTeal)
          .foregroundColor(.white)
          .cornerRadius(30)
          
          NavigationLink("", destination: TxSuccessView(), isActive: $isTxSuccessful)
            .hidden()
        }
       
      }
    }

}

struct SendView_Previews: PreviewProvider {
    static var previews: some View {
        SendView()
    }
}
