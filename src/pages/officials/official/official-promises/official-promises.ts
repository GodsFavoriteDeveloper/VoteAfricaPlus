import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-official-promises',
  templateUrl: 'official-promises.html',
})
export class OfficialPromisesPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('officialData');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialPromisesPage');
  }

}
