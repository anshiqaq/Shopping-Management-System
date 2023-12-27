import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
    })
  }


  submit() {
    this.authService.login(this.form.value).subscribe(result => {
      console.log(result);
      //navigate to login
      this.router.navigate(['/Products']);
    }, err => {
      alert('error');
      console.log(err);
    })
  }


}
