import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mostrardep } from './components/mostrardep/mostrardep';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mostrardep],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dep');
}
