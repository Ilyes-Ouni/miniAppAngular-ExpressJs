import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MaterialModule } from "../material/material.module";
import { AccordionComponent } from './accordion/accordion.component';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideHeaderMenuComponent } from './side-header-menu/side-header-menu.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HeaderMenuComponent,
    AccordionComponent,
    SideHeaderMenuComponent
  ],
  exports: [
    HeaderMenuComponent,
    AccordionComponent,
    SideHeaderMenuComponent
  ]
})
export class SharedModule { }
