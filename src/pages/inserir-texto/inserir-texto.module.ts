import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirTextoPage } from './inserir-texto';

@NgModule({
  declarations: [
    InserirTextoPage,
  ],
  imports: [
    IonicPageModule.forChild(InserirTextoPage),
  ],
  exports: [
    InserirTextoPage
  ]
})
export class InserirTextoPageModule {}
