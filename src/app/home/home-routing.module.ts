import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprovadosComponent } from './aprovados/aprovados.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'aprovado',
    component: AprovadosComponent
  },

  // otherwise
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
