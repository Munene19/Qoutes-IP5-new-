import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quotesdetails.component.html',
  styleUrls: ['./quotesdetails.component.css']
})
export class QuotesdetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

downvote=0;
upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(){
  this.upvote=this.upvote+1;
}

  constructor() { }

  ngOnInit() {
  }

}