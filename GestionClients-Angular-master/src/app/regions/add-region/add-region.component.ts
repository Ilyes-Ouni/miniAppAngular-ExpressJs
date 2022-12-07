import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/clients/region';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  newRegion= new Region();
  regionName!: string;
  constructor(private regionService: RegionsService, private routeDetector: RouteDetectorService, private router: Router,
    private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.routeDetector.setURL('region');
  }

  addRegion(){
    this.newRegion.region_name = this.regionName
    this.regionService.addRegion(this.newRegion)
    .subscribe((res)=>{
      this.dialog.closeAll()
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate( ['regions/addRegion'], {relativeTo: this.route })
    })
  }

}
