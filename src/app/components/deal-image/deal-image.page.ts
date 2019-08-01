import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-image',
  templateUrl: './deal-image.page.html',
  styleUrls: ['./deal-image.page.scss'],
})
export class DealImagePage implements OnInit {
  couponSrc: string;
  constructor() {
    // this.coupon_src =  this.coupon_src = this.navParams.get("image");
  }

  ngOnInit() {
  }

}
