import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

import { Blog } from '../blogs/blog/blog.model';
import { Project } from '../projects/project/project.model';
import { BLOG_DATA } from '../blog-data';
import { PROJECT_DATA } from '../project-data';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'https://forest-blog-api.onrender.com/api';

    constructor(private http: HttpClient) {}
    // Fetch blogs with a timeout and fallback to local data
    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>(`${this.baseUrl}/blogs`).pipe(
            timeout(1000), // 1000ms = 1 second limit
            catchError((error) => {
                console.warn('🌲 Timeout or API unreachable. Loading local blog data...', error);
                return of(BLOG_DATA);
            })
        );
    }
    // Fetch projects with a timeout and fallback to local data
    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.baseUrl}/projects`).pipe(
            timeout(1000), // 1000ms = 1 second limit
            catchError((error) => {
                console.warn('🌲 Timeout or API unreachable. Loading local project data...', error);
                return of(PROJECT_DATA);
            })
        );
    }
}