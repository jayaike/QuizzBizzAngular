import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  getQuizzes() {
    return this.http.get(this.endpoints.quizzes(), {headers: this.globalService.headers()});
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.quiz(slug), {headers: this.globalService.headers()});
  }

  saveAnswer(body) {
    return this.http.patch(this.endpoints.saveAnswer(), body, {headers: this.globalService.headers()});
  }

  submitQuiz(body, slug) {
    return this.http.post(this.endpoints.submitQuiz(slug), body, {headers: this.globalService.headers()});
  }

}
