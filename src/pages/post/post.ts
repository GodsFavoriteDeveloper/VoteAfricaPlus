import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  postData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.postData = this.navParams.get('officialData');
    console.log(this.postData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
