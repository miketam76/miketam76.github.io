import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readingTime',
  standalone: true
})
export class ReadingTimePipe implements PipeTransform {
  transform(content: string | null | undefined): string {
    if (!content) {
      return '0 min read';
    }

    // Remove HTML tags for accurate word count
    const plainText = content.replace(/<[^>]*>/g, '');
    
    // Split by whitespace and filter empty strings
    const words = plainText.trim().split(/\s+/).length;
    
    // Average reading speed: 200 words per minute
    const readingTimeMinutes = Math.ceil(words / 200);
    
    return `${readingTimeMinutes} min read`;
  }
}
