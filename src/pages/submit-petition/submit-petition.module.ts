import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitPetitionPage } from './submit-petition';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    SubmitPetitionPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitPetitionPage),
  ],
  providers: [
    Camera
  ]
})
export class SubmitPetitionPageModule {}
