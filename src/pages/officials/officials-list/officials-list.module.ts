import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialsListPage } from './officials-list';

@NgModule({
  declarations: [
    OfficialsListPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficialsListPage),
  ],
})
export class OfficialsListPageModule {}
