import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from '../../services/global.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.page.html',
  styleUrls: ['./services-page.page.scss'],
})

export class ServicesPagePage {
  
  page_title: any;
  cards: Array<any>;
  tab_titles: Array<any>;

  constructor(
    private activeRouter: ActivatedRoute,
    private http: HttpClient, private globalVars:
    GlobalVars, private router: Router
    ) {
    let service_url = this.router.url.split('/')[2];

    this.page_title = service_url.replace(/-/g, ' ');

    this.http
      .get( `${this.globalVars.apiUrl}settings`, this.globalVars.apiKeyOptions )
      .pipe()
      .subscribe(res => {
        //console.log(res['settings']);
        //console.log(this.page_title);
        this.tab_titles = this.generateService(res['settings'], service_url);

        if( this.router.url.split('/')[3] == null ) {
          //console.log(this.router.url.split('/')[3] == null);

          this.router.navigate([this.router.url, this.tab_titles[0][1]]);
        }
    });
  }

  ngOnInit() {
  }

  generateService(data, tab_titles) {
    if(tab_titles == 'car-wash-services') {
      tab_titles = [
        [data['carwash_services']['titles'][0], data['carwash_services']['categories'][0]],
        [data['carwash_services']['titles'][1], data['carwash_services']['categories'][1]]
      ];
      //console.log(tab_titles);

    } else if(tab_titles == 'car-wash-club-plans') {
      tab_titles = [
        [data['carwash_plans']['titles'][0], data['carwash_plans']['categories'][0]],
        [data['carwash_plans']['titles'][1], data['carwash_plans']['categories'][1]]
      ];
      //console.log(tab_titles);

    } else if(tab_titles == 'unlimited-wash-plans') {
      tab_titles = [
        [data['unlimited_wash_plans']['titles'][0], data['unlimited_wash_plans']['categories'][0]],
        [data['unlimited_wash_plans']['titles'][1], data['unlimited_wash_plans']['categories'][1]]
      ];
      //console.log(tab_titles);

    } else if(tab_titles == 'oil-lube-services') {
      tab_titles = [
        [data['lube']['titles'][0], data['lube']['categories'][0]],
        [data['lube']['titles'][1], data['lube']['categories'][1]]
      ];
      //console.log(tab_titles);

    } else if(tab_titles == 'detail-services') {
      tab_titles = [
        [data['detail_services']['titles'][0], data['detail_services']['categories'][0]],
        [data['detail_services']['titles'][1], data['detail_services']['categories'][1]]
      ];
      //console.log(tab_titles);
    }

    return tab_titles;
  }

}
