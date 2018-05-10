import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.scss']
})
export class LikeCounterComponent implements OnInit {
  public rating:number;

  constructor() { }

  ngOnInit() {
    this.rating = 0;
  }
  rateComic(bool) {
    if(bool){
      this.rating++;
    } else {
      this.rating--;
    }
  }

}
