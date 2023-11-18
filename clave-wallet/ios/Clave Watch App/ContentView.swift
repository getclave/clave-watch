import SwiftUI

extension Color {
    static let primaryTeal = Color(red: 0 / 255, green: 206 / 255, blue: 209 / 255)
    static let secondaryTeal = Color(red: 7 / 255, green: 149 / 255, blue: 176 / 255)
    static let darkGray = Color(red: 40 / 255, green: 40 / 255, blue: 40 / 255)
    static let black = Color(red: 0, green: 0, blue: 0)
}

struct ContentView: View {
    @State private var authenticated: Bool = false
    var phoneConnector = PhoneConnector()

    var body: some View {
        NavigationView {
            VStack {
                if authenticated {
            
                    Image("Logo")
                         .resizable()
                         .scaledToFit()
                         .frame(width: 100, height: 100)
                         .padding(.bottom)
                  
                    NavigationLink(destination: SendReceiveView()) {
                        Text("Continue")
                            .padding()
                            .frame(maxWidth: .infinity)
                            .frame(height: 48) // Adjusted height
                            .background(Color.secondaryTeal)
                            .foregroundColor(.white)
                            .cornerRadius(30)
                    }
                    .buttonStyle(PlainButtonStyle())
                } else {
                    Button("Authenticate Device") {
                        authenticateDevice()
                    }
                    .padding()
                    .frame(height: 48)
                    .background(Color.primaryTeal)
                    .foregroundColor(.white)
                    .cornerRadius(30)
                }
            }
            .background(Color.black)
            .navigationBarHidden(true)
        }
    }

    func authenticateDevice() {
        // Perform authentication logic here

        // Simulate successful authentication for demonstration
        authenticated = true
    }
}

struct SendReceiveView: View {
    @State private var userInput: String = ""
  
  
    var body: some View {
        NavigationView {
            VStack {
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
