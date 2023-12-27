import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularDemoApp';
 
  constructor(private authService : AuthService){
    authService.logout();
    // this.router.navigate(['/login']);,private router:Router
    
  }

  isLoggedIn():boolean{
  return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    }
}
