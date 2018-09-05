import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

    @Input() score = 4;
    @Input() maxScore = 5;
    range = [];
    marked = -1;

  	constructor() { }

  	ngOnInit() {
      for (let i = 0; i < this.maxScore; i++) {
        this.range.push(i);
      }
}

    public isMarked = (index) => {
        if (index < this.score) {
          return 'fas fa-star';
        }
        else if (this.score > index && this.score < index + 1) {
          return 'fas fa-star-half-alt';
        }
        else{
          return 'fas fa-star-o';
        }
    }

}
