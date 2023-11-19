import SwiftUI

extension Color {
  static let primaryTeal = Color(red: 0 / 255, green: 206 / 255, blue: 209 / 255)
  static let secondaryTeal = Color(red: 7 / 255, green: 149 / 255, blue: 176 / 255)
  static let darkGray = Color(red: 40 / 255, green: 40 / 255, blue: 40 / 255)
  static let black = Color(red: 0, green: 0, blue: 0)
}

struct ContentView: View {
  @EnvironmentObject var wallet: Wallet

  @State private var authenticated: Bool = false
  var phoneConnector = PhoneConnector()

  var body: some View {
    NavigationView {
      VStack {
        if authenticated {
          SendReceiveView()
        } else {
          DeployView(authenticate: authenticateDevice)
        }
      }
      .background(Color.black)
      .navigationBarHidden(true)
    }
  }

  func authenticateDevice(username: String) {
    // Perform authentication logic here
    Task {
      do {
        wallet.setKeyPair(username: username)
        try await wallet.deploy(username: username)
        authenticated = true
      } catch {
        debugPrint(error.localizedDescription)
      }
    }
  }
}

struct SendReceiveView: View {
  @State private var userInput: String = ""

  var body: some View {
    NavigationView {
      VStack {
        Image("Avatar")
          .resizable()
          .scaledToFit()
          .frame(width: 64, height: 64)
          .padding(.bottom)
        NavigationLink(destination: SendView()) {
          Text("Send")
            .padding()
            .frame(maxWidth: .infinity)
            .frame(height: 50) // Adjusted height
            .background(Color.primaryTeal)
            .foregroundColor(.white)
            .cornerRadius(30)
        }
        .buttonStyle(PlainButtonStyle())

        NavigationLink(destination: ReceiveView()) {
          Text("Receive")
            .padding()
            .frame(maxWidth: .infinity)
            .frame(height: 50) // Adjusted height
            .background(Color.primaryTeal)
            .foregroundColor(.white)
            .cornerRadius(30)
        }
        .buttonStyle(PlainButtonStyle())
      }
      .background(Color.black)
      .navigationBarHidden(true)
      .navigationBarBackButtonHidden(true)
    }
  }
}

struct ContentView_Previews: PreviewProvider {
  static var previews: some View {
    ContentView()
  }
}
