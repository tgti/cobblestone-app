import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesPagePage } from './services-page.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPagePage,
    children: [
      {
        path: 'favorites',
        loadChildren: '../../components/favorite-cards/favorite-cards.module#FavoriteCardsPageModule'
      },
      {
        path: ':service-type',
        loadChildren: '../../components/service-cards/service-cards.module#ServiceCardsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesPagePage]
})
export class ServicesPagePageModule {}
