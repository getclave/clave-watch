//
//  TxSuccessView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI

struct TxSuccessView: View {
    @State private var confetti: [Confetti] = []
  
    var body: some View {
      ZStack {
                ForEach(confetti) { confettiPiece in
                    confettiPiece
                }
            }
            .onAppear {
                createConfetti()
            }
            .background(Color.black)
      
      Image("Logo")
         .resizable()
         .scaledToFit()
         .frame(width: 48, height: 48)
         .padding(.bottom)
       Text("Transaction successful!")
    }
  
    private func createConfetti() {
        for _ in 0..<20 {
            let confettiPiece = Confetti()
            confetti.append(confettiPiece)
        }
    }
}


struct Confetti: View, Identifiable {
    var id = UUID() // Conform to Identifiable by providing a unique identifier

    @State private var position: CGPoint = CGPoint(x: CGFloat.random(in: 0..<200), y: CGFloat.random(in: 0..<200))
    @State private var rotation: Double = Double.random(in: 0..<360)

    var body: some View {
        Circle()
            .foregroundColor(.random)
            .frame(width: 10, height: 10)
            .position(position)
            .rotationEffect(.degrees(rotation))
            .animation(
                Animation.easeInOut(duration: Double.random(in: 1.0...3.0))
                    .repeatForever(autoreverses: false)
            )
            .onAppear {
                withAnimation {
                    self.position.y += 200
                }
            }
    }
}

extension Color {
    static var random: Color {
        return Color(red: Double.random(in: 0..<1),
                     green: Double.random(in: 0..<1),
                     blue: Double.random(in: 0..<1))
    }
}



struct TxSuccessView_Previews: PreviewProvider {
    static var previews: some View {
        TxSuccessView()
    }
}
