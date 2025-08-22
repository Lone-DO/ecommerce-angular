import { Pipe, PipeTransform } from '@angular/core';

/** TODO: Pipe does not require feature logic, so this can be a shared module resource */

@Pipe({
  name: 'quantitySum',
})
export class QuantitySumPipe implements PipeTransform {
  transform(value: number, quantity?: number): number {
    if (!quantity || !value) return value;
    return value * quantity;
  }
}
