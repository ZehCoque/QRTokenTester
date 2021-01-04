import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Requisição } from '../classes/requisições';
<<<<<<< HEAD
import { Router, NavigationExtras } from '@angular/router';
=======
>>>>>>> 6fe3e605872f1dcbe95ffe7c7c36fe5d45ed1e67

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

  Requisicoes: Array<Requisição> = new Array();
  Exames: Array<string> = new Array();

<<<<<<< HEAD
  constructor(public server: ServerService,
              private router: Router) {}
=======
  constructor(public server: ServerService) {}
>>>>>>> 6fe3e605872f1dcbe95ffe7c7c36fe5d45ed1e67

  ngOnInit(): void {

    this.server.POST({selector: 'get_exames'}).then((exames: any) => {
      let matcher = [];

      exames.forEach(element => {
        matcher[element.ID] = element.Exame
      });

      this.server.POST({selector:'get_requisição'}).then((response: any) => {
        response.forEach((element)=> {

          let split = element.Exames.split('#');
          split.pop();

          let exames_list = []
          split.forEach(id => {
            exames_list.push(matcher[id])
          });

          let json = {
            ID: element.ID,
            Carteira: element.Carteira,
            Exames: exames_list,
            Status: element.Status}

          this.Requisicoes.push(json);

          });
        });

      })

    }

    navigateAprovado(ID: number) {
      let navigationExtras: NavigationExtras = {
        state: {
          ID: ID
        }
      };
      this.router.navigate(['home/aprovado'], navigationExtras);
    }

//   ionViewWillEnter() {
//     this.checkPermissions();
//  }
 
//  checkPermissions() {
//     this.androidPermissions
//     .checkPermission(this.androidPermissions
//     .PERMISSION.WRITE_EXTERNAL_STORAGE)
//     .then((result) => {
//      console.log('Has permission?',result.hasPermission);
//      this.hasWriteAccess = result.hasPermission;
//    },(err) => {
//        this.androidPermissions
//          .requestPermission(this.androidPermissions
//          .PERMISSION.WRITE_EXTERNAL_STORAGE);
//     });
//     if (!this.hasWriteAccess) {
//       this.androidPermissions
//         .requestPermissions([this.androidPermissions
//         .PERMISSION.WRITE_EXTERNAL_STORAGE]);
//     }
//  }
  

  // cryptograph() {
  //   console.log(this.input.value)
  //   	this.server.POST('tokenGenerator',{procedure: "encrypt", text: this.input.value}).then((response:any) => {
  //       console.log(response);
  //       this.token = response.hash;
  //       this.input.reset();
  //     })
  // }

}
