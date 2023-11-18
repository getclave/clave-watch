//
//  ReceiveView.swift
//  Clave Watch App
//
//  Created by asgarovf on 18.11.2023.
//

import SwiftUI
import EFQRCode

func buildQRCode() -> Void {
  if let image = EFQRCode.generate(
      for: "https://github.com/EFPrefix/EFQRCode",
      watermark: UIImage(named: "WWF")?.cgImage
  ) {
      print("Create QRCode image success \(image)")
  } else {
      print("Create QRCode image failed!")
  }
  
}

struct ReceiveView: View {
    var body: some View {
      Text("Receive View Is Here")
    }
}

struct ReceiveView_Previews: PreviewProvider {
    static var previews: some View {
        ReceiveView()
    }
}
