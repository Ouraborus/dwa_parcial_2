import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { HttpModule } from '@angular/http';
import { LikeCounterComponent } from './like-counter/like-counter.component';
import { FilterPipe } from './pipes/comic-filter/comic-filter';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LikeCounterComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
