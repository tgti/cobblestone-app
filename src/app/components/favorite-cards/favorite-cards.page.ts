import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-cards',
  templateUrl: './favorite-cards.page.html',
  styleUrls: ['./favorite-cards.page.scss'],
})
export class FavoriteCardsPage implements OnInit {

  showBlank: boolean;
  favorites: Array<any>;

  constructor() {
    this.showBlank = true;
  }

  ngOnInit() {
  }

}
