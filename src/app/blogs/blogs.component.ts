import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // For Legacy support prior to Angular 16
import { NgIf } from '@angular/common'; // For Legacy support prior to Angular 16
import { BLOG_DATA } from '../blog-data';
import { BlogComponent } from './blog/blog.component';

@Component({ 
  selector: 'app-blogs', 
  imports: [BlogComponent, NgFor, /* NgIf */],
  templateUrl: './blogs.component.html', 
  styleUrls: ['./blogs.component.css'] 
})

export class BlogsComponent {
  blogs = BLOG_DATA;
  selectedBlogsId?: string;

  get selectedBlog() {
    return this.blogs.find( (blog) => blog.id === this.selectedBlogsId );
  }
}