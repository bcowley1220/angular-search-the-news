import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {FormControl, FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  
  @Output() search = new EventEmitter();
  
  newsSearch = new FormControl('');
  searchResult;
  constructor(private newsService: NewsService) { }

  userSearch() {
    event.preventDefault();
    console.log(this.newsSearch.value);
    this.searchResult = this.newsSearch.value;
    this.newsService.newsSearch = this.newsSearch.value;
    console.log(this.newsService.newsSearch);
    this.search.emit(this.searchResult);
  }

  // updateNewsSearch(){
  //   this.newsService.newsSearch = this.newsSearch.value;
  //   return this.newsService.newsSearch;
  // }

  ngOnInit() {
  }

}
