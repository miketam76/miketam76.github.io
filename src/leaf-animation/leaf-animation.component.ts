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
    this.renderer.setStyle(leafContainer, 'contain', 'layout style paint'); // Performance optimization

    document.body.appendChild(leafContainer);

    for (let i = 0; i < 8; i++) {
      const leaf = this.renderer.createElement('img');
      leaf.src = 'assets/leaf.png'; // Ensure leaf.png is in src/assets

      this.renderer.addClass(leaf, 'leaf');
      
      // More varied sizing for visual depth
      const size = Math.random() * 20 + 30; // 30px - 50px
      const opacity = Math.random() * 0.5 + 0.5; // 0.5 - 1.0
      const duration = Math.random() * 4 + 6; // 6s - 10s (slower for drama)
      const delay = Math.random() * 3; // 0 - 3s stagger
      const horizontalDrift = Math.random() * 200 - 100; // -100px to +100px
      const rotation = Math.random() * 360; // Random starting rotation
      
      this.renderer.setStyle(leaf, 'position', 'absolute');
      this.renderer.setStyle(leaf, 'width', `${size}px`);
      this.renderer.setStyle(leaf, 'height', 'auto');
      this.renderer.setStyle(leaf, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(leaf, 'opacity', String(opacity));
      
      // GPU acceleration with will-change
      this.renderer.setStyle(leaf, 'will-change', 'transform');
      this.renderer.setStyle(leaf, 'backface-visibility', 'hidden');
      
      // Custom animation with drift
      this.renderer.setStyle(
        leaf,
        'animation',
        `fall ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`
      );
      this.renderer.setStyle(leaf, 'animationDelay', `${delay}s`);
      
      // Add data attributes for potential future enhancements
      leaf.setAttribute('data-drift', String(horizontalDrift));
      leaf.setAttribute('data-rotation', String(rotation));
      leaf.setAttribute('data-size', String(size));

      this.renderer.appendChild(leafContainer, leaf);
    }
  }
}