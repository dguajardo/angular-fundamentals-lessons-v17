import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1 class ="format">If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol class="format">
      <li>
        Master of Puppets
      </li>
      <li>
        Whole Lotta Love
      </li>
      <li>
       Die Young
      </li>
    </ol>
  `,
  styles: `.format {
    list-style-type: upper-roman
  }`,
})
export class AppComponent {}
