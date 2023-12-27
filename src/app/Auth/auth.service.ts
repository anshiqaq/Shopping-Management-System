import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment.development';
import { UserDto } from './user-dto';
import { LoginResponseDto } from './login-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl=`${environment.baseApiUrl}auth`

  constructor(private client : HttpClient) { }

  register(u:User):Observable<User>{
    return this.client.post<User>(this.apiUrl,u)
  }

  login(user:UserDto):Observable<LoginResponseDto>{          //refer the api it return 4 and login with 2
  let res = this.client.post<LoginResponseDto>(this.apiUrl +'/login',user);  
  res.subscribe(Response =>{
    localStorage.clear();
  localStorage.setItem('userDetails',JSON.stringify( Response));  //key can be any usedrdetail,Json=>converting response .take the string and give the actuall value  
  },err=>{
    console.log(err);
    return null;
  })
  return res;
  }

  getUser():LoginResponseDto{   //get the user frm local strg.
  let user = localStorage.getItem('userDetails');
  return JSON.parse(user || '{}');
  }

  isLoggedIn():boolean{
    return localStorage.getItem('userDetails') !=null ? true :false
  }

  logout(){
    localStorage.clear();
  }
}
