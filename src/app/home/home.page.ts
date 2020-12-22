import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';
import { ServerService } from '../services/server.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  token: any = "test";
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  input: FormControl;

  hasWriteAccess: boolean = false;


  constructor(private server: ServerService,
              private base64ToGallery: Base64ToGallery,
              private toastCtrl: ToastController,
              private androidPermissions: AndroidPermissions) {}

  ngOnInit() {
    this.input = new FormControl('',Validators.required);
  }

  ionViewWillEnter() {
    this.checkPermissions();
 }
 
 checkPermissions() {
    this.androidPermissions
    .checkPermission(this.androidPermissions
    .PERMISSION.WRITE_EXTERNAL_STORAGE)
    .then((result) => {
     console.log('Has permission?',result.hasPermission);
     this.hasWriteAccess = result.hasPermission;
   },(err) => {
       this.androidPermissions
         .requestPermission(this.androidPermissions
         .PERMISSION.WRITE_EXTERNAL_STORAGE);
    });
    if (!this.hasWriteAccess) {
      this.androidPermissions
        .requestPermissions([this.androidPermissions
        .PERMISSION.WRITE_EXTERNAL_STORAGE]);
    }
 }
  

  cryptograph() {
    console.log(this.input.value)
    	this.server.POST('tokenGenerator',{procedure: "encrypt", text: this.input.value}).then((response:any) => {
        console.log(response);
        this.token = response.hash;
        this.input.reset();
      })
  }

  downloadQR() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();

    let data = imageData.split(',')[1];

    console.log(data);

    this.base64ToGallery.base64ToGallery(data, {
      prefix:'_img',mediaScanner: false
    }).then(async res => {
      let toast = await this.toastCtrl.create({
        header: 'QR Code salvo na Galeria'
      });
      toast.present();
    }).catch(err => console.log(err));
          

  }

}
