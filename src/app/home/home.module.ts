import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


import { HomePageRoutingModule } from './home-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { ExamesAprovPipe } from '../pipes/exames-aprov.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxQRCodeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    ExamesAprovPipe]
})
export class HomePageModule {}
