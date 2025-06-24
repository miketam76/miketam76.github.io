import { Component, Input } from '@angular/core';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input({ required: true }) blog!: Blog;
}
