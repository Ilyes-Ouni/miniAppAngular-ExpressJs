import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../login/interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string=environment.APIURL;
  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post(`${this.url}/login`, user);
  }

  checkUser(){
    return this.http.get(`${this.url}/checkUser`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }
}
