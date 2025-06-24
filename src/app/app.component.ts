import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from "./footer/footer.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutMeComponent } from "./about-me/about-me.component"
import { LeafAnimationComponent } from "../leaf-animation/leaf-animation.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet,*/ HeaderComponent, FooterComponent, ProjectsComponent, BlogsComponent, AboutMeComponent, LeafAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Indicator for the About Me dialog
  showAboutMe = false;

  title = 'myforestblog';

  onDialogClick(event: MouseEvent) {
    const dialog = event.currentTarget as HTMLDialogElement;
    const targetInside = (event.target as HTMLElement).closest('.dialog-wrapper');
    if (!targetInside) {
      dialog.close();
    }
  }
  
}
