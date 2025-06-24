import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// const testLeaf = new Image();
// testLeaf.src = "./assets/leaf.png";
// testLeaf.onload = () => console.log("Leaf image loaded successfully!");
// testLeaf.onerror = () => console.error("Error loading leaf image. Check file path.");

// Falling Leaves Effect
// document.addEventListener("DOMContentLoaded", () => {
//     const leafContainer = document.createElement("div");
//     leafContainer.style.position = "fixed";
//     leafContainer.style.top = "0";
//     leafContainer.style.left = "0";
//     leafContainer.style.width = "100vw";
//     leafContainer.style.height = "100vh";
//     leafContainer.style.pointerEvents = "none";
//     document.body.appendChild(leafContainer);

//     for (let i = 0; i < 8; i++) { // Adjust number of leaves
//         let leaf = document.createElement("img");
//         leaf.src = "./assets/leaf.png"; // Ensure the leaf image exists
//         leaf.classList.add("./assets/leaf.png");
//         leaf.style.position = "absolute";
//         leaf.style.width = "40px";
//         leaf.style.left = Math.random() * 100 + "vw"; // Random start position
//         leaf.style.animation = `fall ${Math.random() * 3 + 4}s linear infinite`;
//         leaf.style.animationDelay = Math.random() * 2 + "s";
//         leafContainer.append(leaf);
//     }
// });
