import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  token: any;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  input: FormControl;


  constructor(private server: ServerService) {}

  ngOnInit() {
    this.input = new FormControl('',Validators.required);
  }

  cryptograph() {
    console.log(this.input.value)
    	this.server.POST('tokenGenerator',{procedure: "encrypt", text: this.input.value}).then((response:any) => {
        console.log(response);
        this.token = response.hash;
        this.input.reset();
      })
  }

}
