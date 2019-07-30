import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    for ( const i of args[0]) {
      const regex = new RegExp(i, 'gi');
      value  = value.replace(regex, '*'.repeat(i.length));
    }
    return value;
  }

}
