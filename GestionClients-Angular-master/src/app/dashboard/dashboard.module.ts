import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbCarouselModule,
    MaterialModule,
    CdkAccordionModule,
    RouterModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
