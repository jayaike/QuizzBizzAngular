import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Injectable()
export class UnAuthGuardService implements CanActivate {
  constructor(
      private globalService: GlobalService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (this.globalService.isAuthenticated()) {
      this.router.navigate(['quizzes']);
      return false;
    }

    return true;
  }
}
