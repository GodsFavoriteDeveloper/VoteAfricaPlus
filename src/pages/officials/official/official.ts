import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';


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
  isFavorite = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataProvider: DataProvider, public storage: Storage, private socialSharing: SocialSharing) {
    this.data = this.navParams.get('data');
    //console.log(this.data)
    this.dataProvider.isFavorite(this.data).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialPage');
  }

  ionViewWillEnter(){
   
  }

  favoriteFilm() {
    this.dataProvider.favoriteFilm(this.data).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavoriteFilm() {
    this.dataProvider.unfavoriteFilm(this.data).then(() => {
      this.isFavorite = false;
    });
  }



  loadArticles(a){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    loader.present();
    this.dataProvider.getArticles(a).subscribe(data => {
        console.log(data)
        for(let post of data.posts){
          post.excerpt = post.excerpt.substring(0, 100);
          post.excerpt = post.excerpt + '...'
          post.thumbnail = post.thumbnail || 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png'
        }
        this.posts = data.posts;
      loader.dismiss();
    }, (error)=>{
      console.log(error)
    })
  }


  navigate(a, b){
    this.navCtrl.push(a, {officialData: b})
  }

  share(a, b, c, d){
    let url = 'https://play.google.com/store/apps/details?id=io.initsolutions.vote';
    let message = 'Follow and track progress of ' + this.data.name + ' and other elected officials on Vote Africa Mobile app available on Android and iOS';
    console.log(message)
    // Share
    this.socialSharing.share(message, "Download Vote Africa Today", this.data.thumb, url).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
