import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Requisição } from 'src/app/classes/requisições';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-aprovados',
  templateUrl: './aprovados.component.html',
  styleUrls: ['./aprovados.component.scss'],
})
export class AprovadosComponent implements OnInit {

  ID: number;
  Requisicao: Requisição = new Requisição;
 
  constructor(public route: ActivatedRoute, 
              public router: Router,
              public server: ServerService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ID = this.router.getCurrentNavigation().extras.state.ID;
      }
    });
  }

  ngOnInit() {

    this.server.POST({selector: 'get_exames'}).then((exames: any) => {
      let matcher = [];

      exames.forEach(element => {
        matcher[element.ID] = element.Exame
      });

      this.server.POST({selector:'get_one_exame', params: {ID:this.ID}}).then((response: any) => {          

          let split = response[0].Exames.split('#');
          split.pop();

          let exames_list = []
          split.forEach(id => {
            exames_list.push(matcher[id])
          });

          this.Requisicao = {
            ID: response[0].ID,
            Carteira: response[0].Carteira,
            Exames: exames_list,
            Status: response[0].Status}
        });

      })
    
  }

  openQRCode(){
    let navigationExtras: NavigationExtras = {
      state: {
        ID: this.ID
      }
    };
    this.router.navigate(['home/qrcode'], navigationExtras);
  }

}
