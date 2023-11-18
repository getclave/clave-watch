//
//  DeployView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI

struct DeployView: View {
    @State private var username: String = ""
    // Declare a property to hold the function
    var authenticate: () -> Void
  
    var body: some View {
      VStack {
        Image("Logo")
           .resizable()
           .scaledToFit()
           .frame(width: 64, height: 64)
           .padding(.bottom)

        TextField("Username", text: $username)
        
        Spacer(minLength: 12)
        
        Button("Deploy Account") {
            authenticate()
        }
        .padding()
        .frame(height: 48)
        .background(Color.primaryTeal)
        .foregroundColor(.white)
        .cornerRadius(30)
      }
    }
}

struct DeployView_Previews: PreviewProvider {
    static var previews: some View {
      DeployView(authenticate: {
        print("Autenticate")
      })
    }
}
