import { Component, computed, inject, signal } from '@angular/core';
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
  protected pesquisa = signal('');
  protected deputadosFiltrados = computed(() => {

        const texto = this.pesquisa()
            .toLowerCase()
            .trim();

        if (!texto) {
            return this.deputados();
        }

        return this.deputados().filter(dep =>
            dep.nome.toLowerCase().includes(texto)
        );
    });

  constructor() {
    this.#deputadoService.obterTodos().subscribe(res=> {
      this.deputados.set(res.dados);
    });     
  }
  protected pesquisar(event: Event) {

      const input = event.target as HTMLInputElement;

      this.pesquisa.set(input.value);
  }
}
