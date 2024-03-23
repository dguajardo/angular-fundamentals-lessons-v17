import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <h1>Welcome to {{ title }}!</h1>
    @for(title of productTitles; track title; let idx = $index ){
    <p>
      <a [routerLink]="['details',idx]"> {{ title }} </a>
    </p>
    }
    <router-outlet />`,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
