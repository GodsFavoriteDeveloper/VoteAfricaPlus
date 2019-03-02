import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-official',
  templateUrl: 'official.html',
})
export class OfficialPage {
  official: any = "about";
  data: any;
  posts: any;
  favoriteOfficials: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider, public storage: Storage) {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialPage');
  }

  ionViewWillEnter(){
    this.storage.get('officials').then((data)=>{
      console.log(data)
      this.favoriteOfficials = data;
    })
  }

  addToFavorites(data){
    this.dataProvider.addOfficialToFavorite(data)
  }

  removeFromFavorites(data){
    this.dataProvider.removeOfficialFromFavorites(data);
  }

  isFavorite(data){
    if(this.favoriteOfficials){
      return this.favoriteOfficials.find((officialEl)=>{
        console.log(officialEl.id + "  " + data.id)
        return officialEl.id == data.id
      })
    }else {
      return false
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


  navigate(a, b){
    this.navCtrl.push(a, {officialData: b})
  }

}
