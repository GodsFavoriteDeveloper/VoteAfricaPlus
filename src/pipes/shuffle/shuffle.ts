import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ShufflePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'shuffle',
})
export class ShufflePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return ''
    return value.split('').sort(this.randomize).join('')
  }

  private randomize(a, b) {
  	return Math.random()>.5 ? -1 : 1;
  }
}
