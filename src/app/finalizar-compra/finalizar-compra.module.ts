import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizarCompraPage } from './finalizar-compra.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarCompraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalizarCompraPage]
})
export class FinalizarCompraPageModule {}
