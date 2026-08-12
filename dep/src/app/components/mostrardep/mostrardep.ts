import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../../services/deputado.service';
import { Deputado } from '../../model/deputados.model';

@Component({
  selector: 'app-mostrardep',
  imports: [],
  templateUrl: './mostrardep.html',
  styleUrl: './mostrardep.css',
})
export class Mostrardep {
  readonly #deputadoService = inject(DeputadoService);
  protected deputados = signal<Deputado[]>([]);

  constructor() {
    this.#deputadoService.obterTodos().subscribe(res=> {
      this.deputados.set(res.dados);
    });     
  }
}
