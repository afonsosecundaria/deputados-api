import { Service, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Deputado } from "../model/deputados.model";


@Service()

export class DeputadoService {
    readonly url = 'https://dadosabertos.camara.leg.br/api/v2/deputados';
    readonly #http = inject(HttpClient);

    obterTodos(): Observable<RespostaApi> {
        return this.#http.get<RespostaApi>(this.url);
    }

}