import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { InterfaceComponent } from './interface/interface.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    InterfaceComponent
  ],
})
export class LoginModule { }
