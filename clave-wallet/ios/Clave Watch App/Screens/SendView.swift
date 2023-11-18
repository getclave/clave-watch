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
  
    var body: some View {
      VStack {
        TextField("Username / ENS", text: $username)
        
        TextField("Amount", text: $amount).font(.system(size: 24))
        
        NavigationLink(destination: TxSuccessView()) {
            Text("Send")
                .padding()
                .frame(maxWidth: .infinity)
                .frame(height: 50) // Adjusted height
                .background(Color.primaryTeal)
                .foregroundColor(.white)
                .cornerRadius(30)
        }
        .buttonStyle(PlainButtonStyle())
      }
    }

}

struct SendView_Previews: PreviewProvider {
    static var previews: some View {
        SendView()
    }
}
