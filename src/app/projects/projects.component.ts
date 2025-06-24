import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // For Legacy support prior to Angular 16
import { NgIf } from '@angular/common'; // For Legacy support prior to Angular 16
import { PROJECT_DATA } from '../project-data';
import { ProjectComponent } from './project/project.component';

@Component({ 
  selector: 'app-projects', 
  imports: [ProjectComponent, NgFor, NgIf],
  templateUrl: './projects.component.html', 
  styleUrls: ['./projects.component.css'] 
})

export class ProjectsComponent {
  projects = PROJECT_DATA;
  selectedProjectId?: string;

  get selectedProject() {
    return this.projects.find( (project) => project.id === this.selectedProjectId );
  }
}