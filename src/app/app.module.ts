import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { ServerService } from './services/server.service';

import { HttpClientModule } from '@angular/common/http';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx'

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    NgxQRCodeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    ServerService,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Base64ToGallery,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
