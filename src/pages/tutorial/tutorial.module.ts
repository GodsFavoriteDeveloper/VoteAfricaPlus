import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialPage } from './tutorial';

@NgModule({
  declarations: [
    TutorialPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialPage),
  ],
  exports: [
    TutorialPage
  ],
  providers: [
  
  ]
})
export class TutorialPageModule {}
