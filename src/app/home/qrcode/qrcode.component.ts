import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {

  elementType: 'url' | 'canvas' | 'img' = 'canvas';

  ID: string;

    constructor(public route: ActivatedRoute, 
                public router: Router,) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ID = String(this.router.getCurrentNavigation().extras.state.ID);
      }
    });
  }

  ngOnInit() {}

}
