import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'side-header-menu',
  templateUrl: './side-header-menu.component.html',
  styleUrls: ['./side-header-menu.component.css']
})
export class SideHeaderMenuComponent implements OnInit {
  username!:string;
  tunisiaPath:string = 'https://img.freepik.com/premium-vector/tunisia-flag-design-waving-tunisian-flag-made-satin-silk-fabric-vector-illustration_191567-346.jpg?w=2000';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.checkUser()
    .subscribe((user:any) => {
      console.log(user)
      this.username = user.username
    })
  }

  logout(){
    localStorage.clear()
  }
}
