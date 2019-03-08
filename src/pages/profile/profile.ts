import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  favoriteOfficials: any;
  avatar: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.avatar = "assets/img/buhari_thumb.jpg";
  }

  ionViewWillEnter(){
    this.storage.get('officials').then((data)=>{
      console.log(data)
      this.favoriteOfficials = data;
    })
  }

  navigate(a){
    this.navCtrl.push('OfficialPage', {
      data: a
    })
  }

  clearFavs(){
    this.storage.get('officials').then((data)=>{
      if(data == null){
        this.favoriteOfficials = [];
          let alert = this.alertCtrl.create({
            subTitle: "You are not following any officials. Press 'OK' to find officials to follow",
            buttons: [
              {
                text: "OK",
                handler: ()=>{
                  this.navCtrl.parent.select(1);
                }
              },
              {
                text: "Cancel",
                role: "cancel"
              }
            ]
          })
          alert.present()
      } else {
        this.storage.remove('officials').then((data)=>{
          this.favoriteOfficials = [];
          let alert = this.alertCtrl.create({
            subTitle: "You are no longer following any officials"
          })
          alert.present()
        }).catch((error)=>{
          let alert = this.alertCtrl.create({
            subTitle: "Failed to unfollow officails"
          })
          alert.present()
        })
      }
      
    }).catch((error)=>{
      let alert = this.alertCtrl.create({
        subTitle: "You are not following any officials"
      })
      alert.present()
    })
    
  }

}
