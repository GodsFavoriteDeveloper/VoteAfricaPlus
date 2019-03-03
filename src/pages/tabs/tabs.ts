import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = 'LearnPage';
  tab2Root = 'OfficialsPage';
  tab3Root = 'ChatPage';
  tab4Root = 'ProfilePage';
  chooseTab: any;

  constructor(public navParams: NavParams) {
    this.chooseTab = navParams.get('opentab');
    console.log(this.chooseTab)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
