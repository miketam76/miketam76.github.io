import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from '../blogs/blog/blog.model';
import { Project } from '../projects/project/project.model';
import { BLOG_DATA } from '../blog-data';
import { PROJECT_DATA } from '../project-data';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    getBlogs(): Observable<Blog[]> {
        return of(BLOG_DATA);
    }


    getProjects(): Observable<Project[]> {
        return of(PROJECT_DATA);
    }
}
