import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';
import { NewsFilterPipe } from '../news-filter.pipe';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  searchText: string = "";
  filteredNews: News[] = [];
  

  constructor(public newsService: NewsService, private newsFilter: NewsFilterPipe) { }

  ngOnInit(): void {
    this.getComponentNews();
    console.log(this.news)
    this.filteredNews= this.news
  }

  getComponentNews() {
    this.news = this.newsService.getNews()
  }

  // cerca(){
  //   if (this.searchText.trim()=== ''){
  //     this.filteredNews = this.news;
  //   }else {
  //     this.filteredNews = this.news.filter((n: News)=> this.newsFilter.transform(this.news, this.searchText))
  //   }
  // }
}
