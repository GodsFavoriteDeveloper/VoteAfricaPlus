import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-officials',
  templateUrl: 'officials.html',
})
export class OfficialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialsPage');
    this.data.getOfficials().subscribe((data)=>{
      console.log(data)
    })
  }

  navigate(){
    this.navCtrl.push('OfficialPage')
  }

  seeAll(){
    this.navCtrl.push('OfficialsListPage')
  }

  search(){
    this.navCtrl.push('SearchPage')
  }

}
