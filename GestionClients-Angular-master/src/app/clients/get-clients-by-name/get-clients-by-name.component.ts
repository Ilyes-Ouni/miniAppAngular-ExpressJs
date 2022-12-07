import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';
import Swal from 'sweetalert2';
import { Client } from '../client';
import { ClientsService } from '../clients.service';
import { Region } from '../region';

@Component({
  selector: 'app-get-clients-by-name',
  templateUrl: './get-clients-by-name.component.html',
  styleUrls: ['./get-clients-by-name.component.css']
})
export class GetClientsByNameComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  clients!:Array<Client>
  regions!: Array<Region>
  clientName!: string;
  isAdmin:boolean = false;
  displayedColumns: string[] = ['clientID', 'nomClient', 'email', 'phoneNumber', 'region','dateNaissance','dateCreation', 'options'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort:any;
  @ViewChild(MatPaginator) paginator:any;

  constructor(private clientService: ClientsService, private regionService: RegionsService, private routeDetector: RouteDetectorService,
    private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.routeDetector.setURL('clients')
    this.loginService.checkUser()
    .subscribe((user:any) => {
      if(user.exist) {
          if(user.role == 'admin') this.isAdmin = true
    this.clientService.getClients()
    .subscribe((clients:any) => {
      console.log(clients)
      this.regionService.getRegions()
      .subscribe((regions:any) => {
        console.log(regions)
        this.regions = regions.results
        this.clients = clients.results
        this.dataSource = new MatTableDataSource(clients.results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      })
     })
      }else{
        this.router.navigateByUrl(`/login`)
      }
    })
   }

  rechercherClients(){
    if(this.clientName)
      this.dataSource.data =  this.clients.filter((client:Client) => client.nom_client.toLowerCase().indexOf(this.clientName.toLowerCase()) !== -1);
    else
      this.dataSource.data = this.clients
  }


  deleteClient(clientID:number){
    if(!this.isAdmin){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Access denied',
      })
    }else{
    if (confirm('Are you sure you want to delete this client')){
      this.clientService.deleteClient(clientID)
      .subscribe(res => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate( ['clients/getClientsByName'], {relativeTo: this.route })
      })
    }
  }
 }

  updateClient(clientID:number){
    if(!this.isAdmin){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Access denied',
      })
    }else{
      this.router.navigateByUrl(`clients/getClients/updateClient/${clientID}`)
    }
  }
}
