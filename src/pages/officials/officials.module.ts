import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialsPage } from './officials';

@NgModule({
  declarations: [
    OfficialsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialsPage),
  ],
})
export class OfficialsPageModule {}
