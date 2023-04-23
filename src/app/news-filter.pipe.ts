import { Pipe, PipeTransform } from '@angular/core';
import { News } from './models/news';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(newsFiltred: News[], searchText: string): News[] {
    if (!newsFiltred || !searchText) {
      return newsFiltred
    }

    return newsFiltred.filter(news => {
      return news.titolo.toLowerCase().includes(searchText.toLowerCase()) ||
      news.descrizione.toLowerCase().includes(searchText.toLowerCase()) ||
      news.autore.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
