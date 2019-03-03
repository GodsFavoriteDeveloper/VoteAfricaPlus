import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourVotePage } from './your-vote';

@NgModule({
  declarations: [
    YourVotePage,
  ],
  imports: [
    IonicPageModule.forChild(YourVotePage),
  ],
})
export class YourVotePageModule {}
