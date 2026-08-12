import { Service, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespostaApi } from "../model/deputados.model";


@Service()

export class DeputadoService {
    readonly url = 'https://dadosabertos.camara.leg.br/api/v2';
    readonly #http = inject(HttpClient);

    obterTodos(): Observable<RespostaApi> {
        return this.#http.get<RespostaApi>(
            `${this.url}/deputados?ordem=ASC&ordenarPor=nome`
        );
    }

} 