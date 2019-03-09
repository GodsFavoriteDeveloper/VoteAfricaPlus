import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-officials',
  templateUrl: 'officials.html',
})
export class OfficialsPage {
  isFollowing: boolean = false;
  posts: any;
  parties: any;
  pages: any = "officials";
  searchEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficialsPage');
    this.loadData();
    this.loadParties();
  }

  loadData(){
    this.data.getOfficials().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    }, (error)=>{
      console.log(error)
    })
  }

  loadParties(){
    this.data.getParties().subscribe((data)=>{
      console.log(data);
      this.parties = data;
    }, (error)=>{
      console.log(error)
    })
  }

  navigateToOfficials(a){
    this.navCtrl.push('OfficialPage', {
      data: a
    })
  }

  navigateToParty(a){
    this.navCtrl.push('PartyPage', {
      party: a
    })
  }

  navigate(a){
    this.navCtrl.push(a)
  }

  async selectSegment(a){
    this.searchEnabled = a;
  }


  search(){
    this.navCtrl.push('SearchPage')
  }

  follow(){
    if(this.isFollowing == false){
      this.isFollowing = true;

    } else {
      this.isFollowing = false
    }
  
  }

}
