export type Deputado = {
    id: number,
    url: string,
    nome: string,
    siglaPartido: string,
    uriPartido: string,
    siglaUf: string,
    idLegislatura: number,
    urlFoto: string,
    email: string
}

export type DeputadoResponse = {
    dados: Deputado[]
}