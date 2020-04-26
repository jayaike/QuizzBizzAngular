import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  register(body) {
    return this.http.post(this.endpoints.register(), body, {headers: this.globalService.headers()});
  }

  login(body) {
    return this.http.post(this.endpoints.login(), body, {headers: this.globalService.headers()});
  }

}
