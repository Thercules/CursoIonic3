import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InserirTextoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inserir-texto',
  templateUrl: 'inserir-texto.html',
})
export class InserirTextoPage {
  
  texto: string; 
  listaTexto: string[] = new Array<string>(); 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InserirTextoPage');
  }

  inserirTexto(){
    this.listaTexto.push(this.texto); 
  }

}
