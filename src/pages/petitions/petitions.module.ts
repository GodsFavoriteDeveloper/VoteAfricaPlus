import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetitionsPage } from './petitions';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    PetitionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PetitionsPage),
  ],
  providers: [
    SocialSharing
  ]
})
export class PetitionsPageModule {}
