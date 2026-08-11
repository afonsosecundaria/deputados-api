import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mostrarDep } from './components/mostrar-dep';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, mostrarDep],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dep');
}
