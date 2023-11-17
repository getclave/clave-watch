import SwiftUI

extension Color {
    static let primaryTeal = Color(red: 0 / 255, green: 206 / 255, blue: 209 / 255)
    static let secondaryTeal = Color(red: 7 / 255, green: 149 / 255, blue: 176 / 255)
    static let darkGray = Color(red: 40 / 255, green: 40 / 255, blue: 40 / 255)
    static let black = Color(red: 0, green: 0, blue: 0)
}

struct ContentView: View {
    @State private var authenticated: Bool = false

    var body: some View {
        NavigationView {
            VStack {
                if authenticated {
                    NavigationLink(destination: SendReceiveView()) {
                        Text("Continue")
                            .padding()
                            .frame(maxWidth: .infinity)
                            .frame(height: 50) // Adjusted height
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
                    .frame(maxWidth: .infinity)
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
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: Text("Send functionality goes here")) {
                    Text("Send")
                        .padding()
                        .frame(maxWidth: .infinity)
                        .frame(height: 50) // Adjusted height
                        .background(Color.primaryTeal)
                        .foregroundColor(.white)
                        .cornerRadius(30)
                }
                .buttonStyle(PlainButtonStyle())

                NavigationLink(destination: Text("Receive functionality goes here")) {
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
