import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from '../../services/global.service';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.page.html',
  styleUrls: ['./service-cards.page.scss']
})

export class ServiceCardsPage implements OnInit {
  services: Array<any>;
  constructor(
    private router: Router,
    private http: HttpClient,
    public globalVars: GlobalVars
  ) {
    this.http
      .get(`${this.globalVars.apiUrl}services`, this.globalVars.apiKeyOptions)
      .pipe()
      .subscribe(res => {
        // console.log(res['services']);
        const services = res['services']
          .filter(service => {
            // console.log(this.router.url.split('/')[3]);
            return service.category == this.router.url.split('/')[3];
          })
          .sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

        // console.log(services);

        let newServices = [];

        for (let service of services) {
          let newService = {
            title: service.title,
            image: service.image,
            price: service.price,
            html: service.html,
            id: service.id,
            category: service.catagory,
            hidden: true,
            icon_name: 'icon-down',
            favorited: false,
            color: 'gray',
            order: service.order
          };
          // console.log(newService);
          newServices.push(newService);
        }

        this.services = newServices;
        // console.log(this.services);

      });
  }

  ngOnInit() {}

  showDetails(service) {
    service.hidden = !service.hidden;
  }
}
