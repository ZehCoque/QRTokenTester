import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aprovados',
  templateUrl: './aprovados.component.html',
  styleUrls: ['./aprovados.component.scss'],
})
export class AprovadosComponent implements OnInit {

  ID: any;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ID = this.router.getCurrentNavigation().extras.state.ID;
      }
    });
  }

  ngOnInit() {
    
  }

}
