import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-submit-petition',
  templateUrl: 'submit-petition.html',
})
export class SubmitPetitionPage {
  petImage: any;
  petTitle: any;
  petBody: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private camera: Camera) {
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
            const options: CameraOptions = {
              quality: 100,
              sourceType: this.camera.PictureSourceType.CAMERA,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
            this.petImage = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
             // Handle error
            });
          }
        },
        {
          text: "Upload From Phone",
          handler: () => {
            const options: CameraOptions = {
              quality: 100,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            }
            
            this.camera.getPicture(options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64 (DATA_URL):
             this.petImage = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
             // Handle error
            });
          }
        }
      ],
      enableBackdropDismiss: true
    })
    alert.present()
  }

}
