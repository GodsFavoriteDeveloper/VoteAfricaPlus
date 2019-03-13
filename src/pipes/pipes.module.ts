import { NgModule } from '@angular/core';
import { ShufflePipe } from './shuffle/shuffle';
@NgModule({
	declarations: [ShufflePipe],
	imports: [],
	exports: [ShufflePipe]
})
export class PipesModule {}
