import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
      private globalService: GlobalService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (!this.globalService.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
}
