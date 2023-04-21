export interface News {
id: number,
titolo: string,
descrizione: string,
data: string,
inHome: boolean,
autore: string
}

export interface ListaNews {
    lnews: News[];
}