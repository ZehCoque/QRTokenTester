import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovadosComponent } from './aprovados/aprovados.component';
import { HomePage } from './home.page';
import { NaoAprovadoComponent } from './nao-aprovado/nao-aprovado.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'aprovado',
    component: AprovadosComponent
  },
  {
    path: 'nao-aprovado',
    component: NaoAprovadoComponent
  },
  {
    path: 'qrcode',
    component: QrcodeComponent
  },

  // otherwise
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
