import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NewsCardComponent } from './news-card/news-card.component';
import {NewsService} from './services/news.service';
import { CardContainerComponent } from './news-card/card-container/card-container.component';
import { SearchFormComponent } from './news-card/search-form/search-form.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    CardContainerComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
