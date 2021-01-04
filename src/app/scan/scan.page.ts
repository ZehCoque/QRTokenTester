import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  scannedCode: any;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private server: ServerService
  ) { }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.server.tokenFunc('tokenGenerator',{procedure: "decrypt", text: barcodeData.text}).then((response:any) => {
          console.log(response.value)
        this.scannedCode = response.value;
      })
    });
  }

}
