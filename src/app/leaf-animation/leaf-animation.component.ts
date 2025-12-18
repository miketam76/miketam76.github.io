import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-leaf-animation',
  template: '', // No need for HTML
})
export class LeafAnimationComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const leafContainer = this.renderer.createElement('div');
    this.renderer.setStyle(leafContainer, 'position', 'fixed');
    this.renderer.setStyle(leafContainer, 'top', '0');
    this.renderer.setStyle(leafContainer, 'left', '0');
    this.renderer.setStyle(leafContainer, 'width', '100vw');
    this.renderer.setStyle(leafContainer, 'height', '100vh');
    this.renderer.setStyle(leafContainer, 'pointerEvents', 'none');
    this.renderer.setStyle(leafContainer, 'zIndex', '9999');

    document.body.appendChild(leafContainer);

    for (let i = 0; i < 8; i++) {
      const leaf = this.renderer.createElement('img');
      leaf.src = 'assets/leaf.png'; // Ensure leaf.png is in src/assets

      this.renderer.addClass(leaf, 'leaf');
      this.renderer.setStyle(leaf, 'position', 'absolute');
      this.renderer.setStyle(leaf, 'width', '40px');
      this.renderer.setStyle(leaf, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(
        leaf,
        'animation',
        `fall ${Math.random() * 3 + 4}s linear infinite`
      );
      this.renderer.setStyle(leaf, 'animationDelay', `${Math.random() * 2}s`);
      this.renderer.setAttribute(leaf, 'alt', ''); // Empty alt tells screen readers to skip it
      this.renderer.setAttribute(leaf, 'aria-hidden', 'true'); // Further ensures it's ignored

      this.renderer.appendChild(leafContainer, leaf);
    }
  }
}