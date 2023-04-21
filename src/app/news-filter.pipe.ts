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
      return news.titolo.includes(searchText) ||
      news.descrizione.includes(searchText) ||
      news.autore.includes(searchText);
    })
  }

}
