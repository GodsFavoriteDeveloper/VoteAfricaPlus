import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-official',
  templateUrl: 'official.html',
})
export class OfficialPage {
  official: any = "about";
  data: any;
  isFollowing: boolean = false;
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider) {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialPage');
  }

  follow(){
    if(this.isFollowing == false){
      this.isFollowing = true;

    } else {
      this.isFollowing = false
    }
  
  }

  loadArticles(a){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
    this.dataProvider.getArticles(a).subscribe(data => {
        console.log(data)
        this.posts = data.posts;
      loader.dismiss();
    }, (error)=>{
      console.log(error)
    })
  }


  navigate(a){
    this.navCtrl.push('OfficialInfoPage', {officialData: a})
  }

}
