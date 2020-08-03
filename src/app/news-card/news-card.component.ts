import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  articles;
  constructor(private newsService: NewsService) { }
  newsStories = this.newsService.newsStories;

  response;
  ngOnInit() {
    this.newsService
      .getStories()
      .subscribe(response => {
        this.response = response;
        this.newsService.articles = response.articles;
        this.articles = this.response.articles;
        return this.newsService.articles;
      }
    );
  }

  searchRequest() {
    this.articles = [];
    this.newsService
      .searchRequest()
      .subscribe(response => {
        this.response = response;
        this.articles = response.articles;
        this.newsService.articles = response.articles;
      });
  }

  checkingEvent(stuff){
    this.newsService.newsStories = stuff;
    this.newsStories = stuff;
    this.searchRequest();
  }
}
