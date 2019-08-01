import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DealImagePage } from './deal-image.page';

const routes: Routes = [
  {
    path: '',
    component: DealImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DealImagePage],
  entryComponents: [DealImagePage]
})
export class DealImagePageModule {}
