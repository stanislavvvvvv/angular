import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'currencyRight'
})
export class CurrencyRightPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substr(1).concat(value[0]);
  }

}
