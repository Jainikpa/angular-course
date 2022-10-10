import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (args[0]) {
      return value.toString() + args[0].toString();
    }

    return value + 'bhai';
  }
}
