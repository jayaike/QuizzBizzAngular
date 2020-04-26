import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('');
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');


  constructor(
    private authService: AuthService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    const body = {
      name: this.name.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    };

    this.authService.register(body).subscribe((res) => {
      this.globalService.setToken(res['token']);
      this.router.navigate(['/quizzes']);
    });
  }

}
