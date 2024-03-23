import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { signal } from '@angular/core'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for(item of todos, track todos){
    <label></label>> }
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  updateTodo(todo: Todo) {}
}
