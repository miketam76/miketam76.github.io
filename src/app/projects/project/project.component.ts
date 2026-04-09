import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Project } from './project.model'
import { ReadingTimePipe } from '../../pipes/reading-time.pipe';

@Component({
  selector: 'app-project',
  imports: [ReadingTimePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input({ required: true }) project!: Project;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(): SafeHtml {
    return this.sanitizer.sanitize(1, this.project.details) as SafeHtml;
  }
}
