import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmitPetitionPage } from './submit-petition';

@NgModule({
  declarations: [
    SubmitPetitionPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmitPetitionPage),
  ],
})
export class SubmitPetitionPageModule {}
