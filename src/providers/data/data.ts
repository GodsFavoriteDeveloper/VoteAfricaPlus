import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class DataProvider {
  url: string = 'http://vote-africa.org/nigeria/api/';

  constructor(public http: HttpClient) {
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

}
