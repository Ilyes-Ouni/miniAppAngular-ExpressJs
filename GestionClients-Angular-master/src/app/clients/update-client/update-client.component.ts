import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  public regions!:Array<Region>;
  client = new Client();
  updatedRegionID! : number;

  constructor(private clientService: ClientsService, private regionService: RegionsService, private activatedRoute: ActivatedRoute,
    private routeDetector: RouteDetectorService, private router: Router, private loginService: LoginService){}

  ngOnInit(): void {
    this.routeDetector.setURL('clients')
    this.loginService.checkUser()
    .subscribe((user:any) => {
      if(user.exist) {
      this.clientService.getClient(this.activatedRoute.snapshot.params['id'])
      .subscribe((client:any) => {
        this.regionService.getRegions()
        .subscribe((regions:any) => {
          console.log(client)
          this.updatedRegionID = client.regions_regionid
          this.client = client
          this.regions = regions.results
        })
      })
      }else{
        this.router.navigateByUrl(`/login`)
      }
    })
  }

  updateClient(): void {
    this.client.regions_regionid = this.updatedRegionID

    console.log(this.client)
    this.clientService.updateClient(this.client)
    .subscribe((client:any) => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate( ['/getClients'], {relativeTo: this.activatedRoute })
    })
  }
}
