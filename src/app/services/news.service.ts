import { Injectable } from '@angular/core';
import { ListaNews, News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  public databaseNews: ListaNews = {
      lnews: [
        {
          id: 1,
          titolo: 'Nuova funzionalità su Angular',
          descrizione: 'Angular ha rilasciato una nuova funzionalità che permette di integrare facilmente i dati di Firebase.',
          data: '2022-01-15',
          inHome: true,
          autore: 'Mario Rossi'
        },
        {
          id: 2,
          titolo: 'Il futuro delle criptovalute',
          descrizione: 'Gli esperti prevedono che il prezzo delle criptovalute continuerà a salire nei prossimi mesi.',
          data: '2022-01-14',
          inHome: true,
          autore: 'Paolo Verdi'
        },
        {
          id: 3,
          titolo: 'Apple lancia il nuovo iPhone 15',
          descrizione: 'Apple ha appena lanciato il nuovo iPhone 15 con funzionalità innovative e un design sorprendente.',
          data: '2022-01-13',
          inHome: true,
          autore: 'Giuseppe Bianchi'
        },
        {
          id: 4,
          titolo: 'In arrivo una nuova legge sulla privacy',
          descrizione: 'Il governo ha approvato una nuova legge sulla privacy che introdurrà nuove regole per la gestione dei dati personali.',
          data: '2022-01-12',
          inHome: true,
          autore: 'Maria Neri'
        },
        {
          id: 5,
          titolo: 'La NASA annuncia una nuova missione su Marte',
          descrizione: 'La NASA ha annunciato una nuova missione su Marte che cercherà tracce di vita passata sul pianeta rosso.',
          data: '2022-01-11',
          inHome: true,
          autore: 'Luca Rossi'
        },
        {
          id: 6,
          titolo: 'Facebook introduce una nuova funzione di messaggistica',
          descrizione: 'Facebook ha introdotto una nuova funzione di messaggistica che permette di criptare le conversazioni.',
          data: '2022-01-10',
          inHome: true,
          autore: 'Paola Verdi'
        },
        {
          id: 7,
          titolo: 'Nuova versione del sistema operativo Windows',
          descrizione: 'Microsoft ha rilasciato la nuova versione del sistema operativo Windows con nuove funzionalità e miglioramenti.',
          data: '2022-01-09',
          inHome: true,
          autore: 'Giuseppe Rossi'
        },
        {
          id: 8,
          titolo: 'Amazon lancia un nuovo servizio di consegna a domicilio',
          descrizione: 'Amazon ha lanciato un nuovo servizio di consegna a domicilio che permette di ricevere i prodotti in un poche ore',
          data: '2022-01-08',
          inHome: true,
          autore: 'Maria Bianchi'
        }
      ]
  }

  getNews(): News[] {
    return this.databaseNews.lnews;
  }
}

