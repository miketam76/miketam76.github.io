import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';
import { ProjectComponent } from './project/project.component';
import { Project } from './project/project.model';

@Component({ 
  selector: 'app-projects', 
  imports: [ProjectComponent, NgFor, /* NgIf */],
  templateUrl: './projects.component.html', 
  styleUrls: ['./projects.component.css'] 
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProjectId?: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  get selectedProject() {
    return this.projects.find( (project) => project.id === this.selectedProjectId );
  }
}