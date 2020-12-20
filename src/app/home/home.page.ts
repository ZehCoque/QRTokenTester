import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  token: any = 'bd53607fa0fa5c322b93912dc556e4d4591f7d6f3219ff51714b1769e12cbbcd';
  elementType: string = 'url';
  input: FormControl;


  constructor(private server: ServerService) {}

  ngOnInit() {
    this.input = new FormControl('');
  }

  cryptograph() {
    console.log(this.input.value)
    	this.server.POST('tokenGenerator',{text: this.input.value}).then((response:any) => {
        console.log(response);
        this.token = response.hash;
      })
  }

}
