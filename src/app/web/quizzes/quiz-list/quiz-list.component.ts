import { QuizzesService } from './../../../services/quizzes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizzes;
  constructor(
    private quizzesService: QuizzesService
  ) { }

  ngOnInit(): void {
    this.quizzesService.getQuizzes().subscribe((res) => {
      this.quizzes = res;
    });
  }

}
