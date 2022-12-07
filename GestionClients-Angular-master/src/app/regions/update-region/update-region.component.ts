import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/clients/region';
import { RegionsService } from 'src/app/shared/services/region.service';
import { RouteDetectorService } from 'src/app/shared/services/route-detector.service';

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {
  oldRegion = new Region();
  newRegion = new Region();
  constructor(private regionService: RegionsService, private routeDetector: RouteDetectorService, private router: Router,
    private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.routeDetector.setURL('region');
    this.regionService.data.subscribe(regionID => {
        this.regionService.getRegion(regionID)
        .subscribe((region: any)=>{
          console.log(region)
            this.oldRegion = region;
            this.newRegion.regionid = regionID
        })
    });
  }

  updateRegion(){

    console.log(this.newRegion)
      this.regionService.updateRegion(this.newRegion)
      .subscribe((res)=>{
        this.dialog.closeAll()
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate( ['regions/updateRegion'], {relativeTo: this.route })
      })
  }

}
