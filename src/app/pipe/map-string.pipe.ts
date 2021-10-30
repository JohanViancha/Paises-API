import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapString'
})
export class MapStringPipe implements PipeTransform {

  transform(value: object, ...args: unknown[]): string {
    console.log(value);
    let object = '';
    Object.entries(value).forEach(([key, value],i) => {
      if(i==1){
        object +=`,`
      }
      object += `${value.symbol} ${value.name} `;

     });
      return object;
  }

}
