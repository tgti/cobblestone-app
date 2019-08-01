import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from '../../services/global.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  locations: Array<any>;
  constructor(private http: HttpClient, public globalVars: GlobalVars) {
    this.http
      .get( `${this.globalVars.apiUrl}locations`, this.globalVars.apiKeyOptions )
      .pipe()
      .subscribe(res => {
        //console.log(res['specials']);
        this.locations = res['locations'];
    });
  }

  ngOnInit() {
  }

}
