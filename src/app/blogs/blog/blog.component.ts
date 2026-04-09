import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Blog } from './blog.model';
import { ReadingTimePipe } from '../../pipes/reading-time.pipe';

@Component({
  selector: 'app-blog',
  imports: [ReadingTimePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input({ required: true }) blog!: Blog;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(): SafeHtml {
    return this.sanitizer.sanitize(1, this.blog.details) as SafeHtml;
  }
}
