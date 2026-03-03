import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { BlogComponent } from './blog/blog.component';
import { Blog } from './blog/blog.model';

@Component({ 
  selector: 'app-blogs', 
  imports: [BlogComponent, NgFor, /* NgIf */],
  templateUrl: './blogs.component.html', 
  styleUrls: ['./blogs.component.css'] 
})

export class BlogsComponent implements OnInit {
  blogs: Blog[] = [];
  selectedBlogsId?: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }

  get selectedBlog() {
    return this.blogs.find( (blog) => blog.id === this.selectedBlogsId );
  }
}