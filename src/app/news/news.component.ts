import { Component, EventEmitter, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/news';
import { NewsFilterPipe } from '../news-filter.pipe';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  searchText: string = "";
  filteredNews: News[] = [];
  showForm: boolean = false
  newForm!: FormGroup 
  

  constructor(public newsService: NewsService, private newsFilter: NewsFilterPipe, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getComponentNews();
    console.log(this.news)
    this.filteredNews= this.news

    this.newForm = new FormGroup({
      id: new FormControl('', Validators.required),
      titolo: new FormControl('', Validators.required),
      descrizione: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      inHome: new FormControl(false),
      autore: new FormControl('', Validators.required)
    });
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

  appareForm(){
this.showForm = true
  }

  chiudeForm(){
    this.newForm.reset();
    this.showForm = false
  }

  onSubmit(){
    this.news.push({
      id: this.news.length + 1,
      titolo: this.newForm.value.titolo,
      descrizione: this.newForm.value.descrizione,
      data: this.newForm.value.data,
      inHome: this.newForm.value.inHome,
      autore: this.newForm.value.autore
    });
    this.newForm.reset();
    this.showForm = false;
  }
}
