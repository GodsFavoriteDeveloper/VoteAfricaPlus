import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  favoriteOfficials: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  ionViewWillEnter(){
    this.storage.get('officials').then((data)=>{
      console.log(data)
      this.favoriteOfficials = data;
    })
  }

}
