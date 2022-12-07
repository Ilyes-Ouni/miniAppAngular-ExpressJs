import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';
import Swal from 'sweetalert2';
import { AddRegionComponent } from '../add-region/add-region.component';
import { UpdateRegionComponent } from '../update-region/update-region.component';

@Component({
  selector: 'app-get-regions',
  templateUrl: './get-regions.component.html',
  styleUrls: ['./get-regions.component.css']
})
export class GetRegionsComponent implements OnInit {
  background:string = 'https://us.123rf.com/450wm/detailfoto/detailfoto1702/detailfoto170200097/71490950-fond-d-%C3%A9cran-blanc.jpg?ver=6'
  displayedColumns: string[] = ['regionID', 'regionName', 'options'];
  dataSource = new MatTableDataSource();
  isAdmin:boolean = false;
  @ViewChild(MatSort) sort:any;
  @ViewChild(MatPaginator) paginator:any;

  constructor(private regionService: RegionsService, private routeDetector: RouteDetectorService,
    private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private loginService: LoginService) { }


  ngOnInit(): void {
    this.routeDetector.setURL('region');
    this.routeDetector.setURL('clients')

    this.loginService.checkUser()
    .subscribe((user:any) => {
      if(user.exist) {
        if(user.role == 'admin') this.isAdmin = true
    this.regionService.getRegions()
    .subscribe((res:any) => {
      console.log(res)
        this.dataSource = new MatTableDataSource(res.results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
    })
  }else{
    this.router.navigateByUrl(`/login`)
  }})
  }

  deleteRegion(regionID:number){
      console.log(regionID)
    if (confirm('Are you sure you want to delete this region')){
      this.regionService.deleteRegion(regionID)
      .subscribe(res => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate( ['regions/getRegions'], {relativeTo: this.route })
      })
    }
  }

  addRegion(){
    if(!this.isAdmin){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Access denied',
      })
    }else{
      this.dialog.open(AddRegionComponent)
    }
  }

  updateRegion(regionID:number){
    this.regionService.sendData(regionID);
    this.dialog.open(UpdateRegionComponent)
  }

}
