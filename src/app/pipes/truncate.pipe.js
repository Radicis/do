import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(str, count) { 
    if(str.length<=count)
      return str;  
 
    return str.substring(0, count) + "..";
  }
}