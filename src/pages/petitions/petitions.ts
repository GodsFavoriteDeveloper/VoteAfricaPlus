import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-petitions',
  templateUrl: 'petitions.html',
})
export class PetitionsPage {
  items: any = ["Matthew", "Mark", "Luke", "John", "Malachi", "JAmes", "John", "John", "John", "John", "John", "John", "John", "John"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetitionsPage');
  }

}
