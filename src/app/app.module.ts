import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { HttpModule } from '@angular/http';
import { LikeCounterComponent } from './like-counter/like-counter.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LikeCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
