import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';

export const loginRoutes: Routes = [
  {path: '', component: InterfaceComponent},
];


@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule{ }
