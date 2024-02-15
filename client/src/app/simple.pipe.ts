import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(email: string, ...args: unknown[]): unknown {
    return 'email:'+email;
  }

}
