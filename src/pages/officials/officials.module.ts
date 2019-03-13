import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficialsPage } from './officials';
import { ShufflePipe } from '../../pipes/shuffle/shuffle';

@NgModule({
  declarations: [
    OfficialsPage,
    ShufflePipe
  ],
  imports: [
    IonicPageModule.forChild(OfficialsPage),
  ],
})
export class OfficialsPageModule {}
