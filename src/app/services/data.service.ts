// For hard-coded data, we can use a service to provide the data to our components. This is a common practice in Angular applications, as it allows us to separate the data logic from the presentation logic.
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Blog } from '../blogs/blog/blog.model';
// import { Project } from '../projects/project/project.model';
// import { BLOG_DATA } from '../blog-data';
// import { PROJECT_DATA } from '../project-data';

// @Injectable({
//     providedIn: 'root'
// })
// export class DataService {

//     getBlogs(): Observable<Blog[]> {
//         return of(BLOG_DATA);
//     }


//     getProjects(): Observable<Project[]> {
//         return of(PROJECT_DATA);
//     }
// }

// Using MongoDB and Express.js backend
// If connection to the backend fails, we can catch the error and return the local data instead. This way, our application can still function even if the backend is down. 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators'; // This is the key operator

// Ensure these models and data files are correctly imported
import { Blog } from '../blogs/blog/blog.model';
import { Project } from '../projects/project/project.model';
import { BLOG_DATA } from '../blog-data';
import { PROJECT_DATA } from '../project-data';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // Using your "freaking port" 5050
    //private baseUrl = 'http://localhost:5050/api'; 
    private baseUrl = 'https://forest-blog-api.onrender.com/api';

    constructor(private http: HttpClient) {}

    // The getBlogs and getProjects methods now attempt to fetch data from the backend API. If the API call fails (e.g., if the server is down), the catchError operator will catch the error, log a warning, and return the local data instead.
    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>(`${this.baseUrl}/blogs`).pipe(
            catchError((error) => {
                // We log the error so we know the API is down
                console.warn('🌲 Forest API is unreachable. Loading local blog data...', error);
                // 'of' turns your local array into an Observable that the component expects
                return of(BLOG_DATA);
            })
        );
    }
    
    // The getProjects method follows the same pattern as getBlogs, ensuring that if the API is unreachable, the application can still function by providing the local project data.
    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.baseUrl}/projects`).pipe(
            catchError((error) => {
                console.warn('🌲 Forest API is unreachable. Loading local project data...', error);
                return of(PROJECT_DATA);
            })
        );
    }
}