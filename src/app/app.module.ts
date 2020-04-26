import { EndpointsService } from './services/endpoints.service';
import { AuthService } from 'src/app/services/auth.service';
import { UnAuthGuardService } from './guards/unauth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './web/auth/auth.component';
import { LoginComponent } from './web/auth/login/login.component';
import { RegisterComponent } from './web/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { QuizzesComponent } from './web/quizzes/quizzes.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { GlobalService } from './services/global.service';
import { QuizListComponent } from './web/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './web/quizzes/quiz-detail/quiz-detail.component';
import { QuestionComponent } from './web/quizzes/quiz-detail/question/question.component';
import { AnswerComponent } from './web/quizzes/quiz-detail/question/answer/answer.component';
import { QuizResultComponent } from './web/quizzes/quiz-result/quiz-result.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    QuizzesComponent,
    QuizListComponent,
    QuizDetailComponent,
    QuestionComponent,
    AnswerComponent,
    QuizResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    AuthGuardService,
    UnAuthGuardService,
    AuthService,
    EndpointsService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
