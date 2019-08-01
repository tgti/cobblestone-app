import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'App Discounts',
      url: '/current-deals',
      icon: 'logo-usd'
    },
    {
      title: 'Car Wash Services',
      url: '/services/car-wash-services',
      icon: 'rainy'
    },
    {
      title: 'Prepaid Club Plans',
      url: '/services/car-wash-club-plans',
      icon: 'nuclear'
    },
    {
      title: 'Unlimited Wash Plans',
      url: '/services/unlimited-wash-plans',
      icon: 'refresh'
    },
    {
      title: 'Oil and Lube Services',
      url: '/services/oil-lube-services',
      icon: 'build'
    },
    {
      title: 'Detail Services',
      url: '/services/detail-services',
      icon: 'car'
    },
    {
      title: 'Your Favorites',
      url: '/favorites',
      icon: 'star'
    },
    {
      title: 'Locations',
      url: '/locations',
      icon: 'pin'
    },
    {
      title: 'Text Club',
      url: '/text-club',
      icon: 'text'
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: 'happy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
