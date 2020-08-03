import { Component, OnInit, Input } from '@angular/core';
import {NewsService} from '../../services/news.service'
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  @Input() articles;
  constructor(private newsService: NewsService) { }
  ngOnInit() {

  };

}
