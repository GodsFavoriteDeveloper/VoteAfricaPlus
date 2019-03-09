import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage {
  partyData: any;
  officials: any;
  countOfficials: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.partyData = this.navParams.get('party');
    console.log(this.partyData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartyPage');
    this.loadOfficials()
  }

  loadOfficials(){
    this.dataProvider.getOfficials().subscribe((data)=>{
      this.officials = data;
      this.countOfficials = Object.keys(data).length
      for(let post of this.officials){
        //post.background = post.background.substring(0, 100);
      }
    })
  }

}
