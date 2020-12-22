import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  scannedCode: any;
  elementType: 'url' | 'canvas' | 'img' = 'url';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    private server: ServerService
  ) { }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.server.POST('tokenGenerator',{procedure: "decrypt", text: barcodeData.text}).then((response:any) => {
          console.log(response.value)
        this.scannedCode = response.value;
      })
    });
  }

}
