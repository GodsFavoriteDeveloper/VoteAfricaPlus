import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-petitions',
  templateUrl: 'petitions.html',
})
export class PetitionsPage {
  petitions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider, public alertCtrl: AlertController, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetitionsPage');
    this.loadPetitions();
  }

  loadPetitions(){
    this.dataProvider.getPetitions().subscribe((data)=>{
      this.petitions = data;
      console.log(data)
    })
  }

  submitPetition(){
    this.navCtrl.push('SubmitPetitionPage')
  }

  navigate(a){
    this.navCtrl.push('PetitionPage', {
      data: a
    })
  }

  support(){
    let alert = this.alertCtrl.create({
      subTitle: "Feature coming soon"
    })
    alert.present()
  }

  share(){
    let url = 'https://play.google.com/store/apps/details?id=io.initsolutions.vote';
    let message = 'Follow and track progress of elected officials and other elected officials on Vote Africa Mobile app available on Android and iOS';
    console.log(message)
    // Share
    this.socialSharing.share(message, "Download Vote Africa Today", '', url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
