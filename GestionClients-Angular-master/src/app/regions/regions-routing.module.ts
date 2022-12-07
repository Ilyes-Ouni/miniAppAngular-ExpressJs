import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRegionsComponent } from './get-regions/get-regions.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'getRegions', component: GetRegionsComponent},
    // {path: '**', redirectTo: '/getRegions', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
