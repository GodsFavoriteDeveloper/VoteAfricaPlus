import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable()
export class DataProvider {
  url: string = 'http://vote-africa.org/nigeria/api/';
  favoriteOfficials: any = [];

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getOfficials(){
    return this.http.get('assets/json/officials.json')
  }

  getArticles(a): Observable<any>{
    return this.http.get(this.url + 'get_category_posts/?slug=' + a)
  }

  postComment(a, b, c, d){
    return this.http.post(this.url + 'respond/submit_comment/?post_id=' + a + '&name=' + b + '&email=' + c + '&content=' + d, {}, {})
  }

  addOfficialToFavorite(official){
    this.favoriteOfficials.push(official)
      this.storage.set('officials', this.favoriteOfficials).then((data)=>{
        console.log(data)
      });

  }

  removeOfficialFromFavorites(official){
    this.storage.get('officials').then((data)=>{
      console.log(data);
      const position = data.findIndex((officialEl)=>{
        return officialEl.id == official.id;
      })
      console.log(position)
      this.favoriteOfficials = data.splice(position, 1);
      this.storage.remove('officials');
      this.storage.set('officials', this.favoriteOfficials).then((data)=>{
        console.log(data);
      });
    });
    
  }

  getFavoriteOfficials(){
    return this.favoriteOfficials.splice()
  }

  isFavoriteOfficial(official){
    this.storage.get('officials').then((data)=>{     
    })
    return this.favoriteOfficials.find((officialEl)=>{
      return officialEl.id == official.id
    })
  }

}
