import { Pipe, PipeTransform } from '@angular/core';

/** Pipe does not rely on feature logic, could be stored as shared resource */

@Pipe({
  name: 'shortenText',
})
export class ShortenTextPipe implements PipeTransform {
  transform(text: string): string {
    if (text.length > 100) return `${text.substring(0, 100)}...`;
    return text;
  }
}
