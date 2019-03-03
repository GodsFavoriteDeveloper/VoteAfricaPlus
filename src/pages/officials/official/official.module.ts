import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialPage } from './official';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    OfficialPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialPage),
  ],
  providers: [
    SocialSharing
  ]
})
export class OfficialPageModule {}
