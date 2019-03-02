import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialInfoPage } from './official-info';

@NgModule({
  declarations: [
    OfficialInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialInfoPage),
  ],
})
export class OfficialInfoPageModule {}
