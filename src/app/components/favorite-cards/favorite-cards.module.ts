import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavoriteCardsPage } from './favorite-cards.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteCardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoriteCardsPage]
})
export class FavoriteCardsPageModule {}
