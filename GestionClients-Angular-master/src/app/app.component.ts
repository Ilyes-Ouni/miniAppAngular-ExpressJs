import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { RouteDetectorService } from './shared/services/route-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  expandedIndex = 0;
  logInUrl:boolean = false;
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router, private routeDetector: RouteDetectorService){}

  ngOnInit(): void {
    this.routeDetector.data.subscribe(response => {
      if(response == 'login') this.logInUrl = true;
      else this.logInUrl = false;
      console.log(this.logInUrl)
    });
  }

  title = 'clients';
}

