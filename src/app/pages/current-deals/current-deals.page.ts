import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GlobalVars } from '../../services/global.service';

import { DealImagePageModule } from '../../components/deal-image/deal-image.module';

@Component({
  selector: 'app-current-deals',
  templateUrl: './current-deals.page.html',
  styleUrls: ['./current-deals.page.scss'],
})

export class CurrentDealsPage implements OnInit {
  deals: Array<any>;
  constructor(
    private http: HttpClient,
    public globalVars: GlobalVars,
    public alertController: AlertController,
    private modalController: ModalController,
  ) {
    this.http
      .get( `${this.globalVars.apiUrl}currentdeals`, this.globalVars.apiKeyOptions )
      .pipe()
      .subscribe(res => {
        // console.log(res['currentDeals']);
        this.deals = res['currentDeals'].filter(deal => {
          const now: Date = new Date(Date.now()),
                date = now.setDate(now.getDate()),
                expiration = now.setDate(now.getDate() + parseInt(deal['time']));

          deal.expiration = now.toISOString();
          return date < expiration;
        });
    });
  }

  ngOnInit() {
  }

  convertDate(isoDate) {
    let dateData = isoDate.split('-');
    let YY = dateData[0].slice(2, 4); // delete the 20 in 20YY
    let dd = dateData[2].slice(0, 2); // gets just the day instead of time stuff
    return `${dateData[1]}/${dd}/${YY}`;
  }

  async promptDealItem(deal: any) {
    const alert = await this.alertController.create({
      header: deal.name,
      message: `Expires ${this.convertDate(deal.expiration)}. Most Cars. Not Valid with any other discount or offer. Vehicles with 3+ rows of seats add $1 to full serve car washes`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('cancelled');
          }
        },
        {
          text: 'View',
          handler: () => {
            //console.log('viewed');
            this.openDealImage(deal);
          }
        }
      ]
    });

    await alert.present();
  }

  async openDealImage(deal: any) {
    //console.log(deal['image']);
    const opendeal = await this.modalController.create({
      component: DealImagePageModule,
      componentProps: {
        image: deal['image']
      }
    });

    await opendeal.present();
  }
}
