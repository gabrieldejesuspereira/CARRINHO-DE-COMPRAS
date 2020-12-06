import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProddetalhePage } from './proddetalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ProddetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProddetalhePageRoutingModule {}
