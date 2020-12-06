import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProddetalhePageRoutingModule } from './proddetalhe-routing.module';

import { ProddetalhePage } from './proddetalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProddetalhePageRoutingModule
  ],
  declarations: [ProddetalhePage]
})
export class ProddetalhePageModule {}
