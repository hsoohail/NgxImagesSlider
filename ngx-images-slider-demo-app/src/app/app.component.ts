import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-images-slider-demo-app';
  images = [
    '/assets/images/response-time-1.jpg',
    '/assets/images/responsiveness1.jpg',
    '/assets/images/robustness-1.jpg',
    '/assets/images/robustness-2.png',
    '/assets/images/sample.jpg',
    '/assets/images/images.png'
  ]
}
