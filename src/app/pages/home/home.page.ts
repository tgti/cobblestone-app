import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: Array<any>;
  constructor(private http: HttpClient, public globalVars: GlobalVars) {
    this.http
      .get( `${this.globalVars.apiUrl}specials`, this.globalVars.apiKeyOptions )
      .pipe()
      .subscribe(res => {
        //console.log(res['specials']);
        this.cards = res['specials'];
    });
  }
}
