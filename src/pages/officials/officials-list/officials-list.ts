import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-officials-list',
  templateUrl: 'officials-list.html',
})
export class OfficialsListPage {
  officials: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialsListPage');
    this.loadOfficials();
  }

  loadOfficials(){
    this.dataProvider.getOfficials().subscribe((data)=>{
      this.officials = data;
      for(let post of this.officials){
        //post.background = post.background.substring(0, 100);
      }
    })
  }

  navigate(a){
    this.navCtrl.push('OfficialPage', {
      data: a
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.dataProvider.getOfficials().subscribe((data)=>{
      this.officials = data;
      for(let post of this.officials){
        //post.background = post.background.substring(0, 100);
      }
    })

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.loadOfficials()
      this.officials = this.officials.filter((item) => {
        console.log(item)
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
