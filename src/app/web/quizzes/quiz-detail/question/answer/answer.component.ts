import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input()
  answer: any;

  @Input()
  index: number;

  @Input()
  selectedAnswer: number;

  letter: string;

  @Output()
  selectAnswer = new EventEmitter<any>();

  callParent(id: number) {
    this.selectAnswer.next(id);
  }

  isSelected() {
    return this.selectedAnswer == this.answer.id;
  }

  constructor() { }

  ngOnInit(): void {
    this.letter = String.fromCharCode(65 + this.index);
  }

}
