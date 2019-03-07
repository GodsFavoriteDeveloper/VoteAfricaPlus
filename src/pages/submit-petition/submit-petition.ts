import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-submit-petition',
  templateUrl: 'submit-petition.html',
})
export class SubmitPetitionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPetitionPage');
  }

  uploadImage(){
    let alert = this.alertCtrl.create({
      subTitle: "Select An Option",
      buttons: [
        {
          text: "Take Picture",
          handler: () => {

          }
        },
        {
          text: "Upload From Phone",
          handler: () => {

          }
        }
      ],
      enableBackdropDismiss: true
    })
    alert.present()
  }

}
