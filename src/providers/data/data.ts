import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
const STORAGE_KEY = 'officials';


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

  getParties(){
    return this.http.get('assets/json/parties.json')
  }

  getArticles(a): Observable<any>{
    return this.http.get(this.url + 'get_category_posts/?slug=' + a)
  }

  postComment(a, b, c, d){
    return this.http.post(this.url + 'respond/submit_comment/?post_id=' + a + '&name=' + b + '&email=' + c + '&content=' + d, {}, {})
  }

  isFavorite(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      console.log(result)
      //return result && result.indexOf(filmId) !== -1;
      return result.find((quoteEl) => {
        return quoteEl.id === filmId.id;
    });
    });
  }
 
  favoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        result.push(filmId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [filmId]);
      }
    });
  }
 
  unfavoriteFilm(filmId) {
    return this.getAllFavoriteFilms().then(result => {
      if (result) {
        var index = result.indexOf(filmId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavoriteFilms() {
    return this.storage.get(STORAGE_KEY);
  }
}
