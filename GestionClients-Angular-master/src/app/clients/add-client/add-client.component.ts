import { Component, OnInit } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})

export class AddClientComponent implements OnInit {
  client = new Client();
  regionID!: number;
  regions!: Array<Region>
  isAdmin:boolean= false;
  constructor(private clienService: ClientsService, private regionService: RegionsService, private routeDetector: RouteDetectorService,
    private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.routeDetector.setURL('clients')
    this.loginService.checkUser()
    .subscribe((user:any) => {
      if(user.exist) {
        if(user.role == 'admin') this.isAdmin = true
        this.regionService.getRegions()
        .subscribe((regions: any) => {
          console.log(regions)
          this.regions = regions.results
    })
  }else{
    this.router.navigateByUrl(`/login`)
  }})
  }

  addClient(){
    console.log(this.regionID)
    if(this.regionID && this.client.date_creation && this.client.date_naissance && this.client.email && this.client.nom_client && this.client.phone_number){
      this.regions.forEach(region => {
        if(region.regionid == this.regionID) {
          this.client.regions_regionid = this.regionID
        }
      });

    console.log(this.client)
    this.clienService.addClient(this.client)
    .subscribe(res=>{
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate( ['clients/getClients'], {relativeTo: this.route })
    })
   }
  }
}
