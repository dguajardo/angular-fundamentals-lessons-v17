import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input [(ngModel)] = "title"type="text" id="title">

        <label for="body">Post Body</label>
        <textarea id="body" [(ngModel)] = "body"></textarea>
      </section>
      <section>
        <p> {{ title }}</p>
        <p>{{ body }} </p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  body = 'Tell me about ..';
}
