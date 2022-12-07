import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';
import { LoginService } from '../../shared/services/login.service';
import { User } from './user';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  user:User = new User();
  constructor(private router: Router, private routeDetector: RouteDetectorService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.user.username=""
    this.user.password=""
    this.routeDetector.setURL('login')
    if(localStorage.getItem('token')){
      this.loginService.checkUser()
      .subscribe((res:any)=>{
        if(res.exist){
          console.log(res)
          this.router.navigate(['dashboard'])
        }
      })
    }
  }


  onLoggedIn(){
    console.log(this.user)
    this.loginService.login(this.user)
    .subscribe((res: any) => {
      console.log(res)
      if(res.message != 'Account not found'){
        localStorage.setItem('token',res.token)
        this.router.navigate(['dashboard'])
      }
    })
  }
}
