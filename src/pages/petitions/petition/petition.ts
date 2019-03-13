import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-petition',
  templateUrl: 'petition.html',
})
export class PetitionPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetitionPage');
  }

}
