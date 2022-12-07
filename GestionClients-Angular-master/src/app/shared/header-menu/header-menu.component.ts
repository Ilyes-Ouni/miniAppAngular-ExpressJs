import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  username!:string;
  userImage!:string;
  url: string=environment.APIURL;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.checkUser()
    .subscribe((user:any) => {
      this.username = user.username
      this.userImage = user.imagePath
      console.log(this.userImage)
    })
  }

  logout(){
    localStorage.clear()
  }
}
