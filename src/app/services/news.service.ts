import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  articles = [];
  response;
  json;
  newsStories = 'World Top';
  searchInput;
  newsSearch;


  //first async call on body load to get top world stories
  getStories(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/top-headlines?` +
            'country=us&' +
            'apiKey=24036c93ea52469a83075629f87a04b1')
  }

  searchRequest(): Observable<any> {
    return this.http.get(`http://newsapi.org/v2/everything?q=${this.newsSearch}&apiKey=24036c93ea52469a83075629f87a04b1`);
  }
  

  
}
