import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { GetClientsByIdComponent } from './get-clients-by-id/get-clients-by-id.component';
import { GetClientsByNameComponent } from './get-clients-by-name/get-clients-by-name.component';
import { GetClientsComponent } from './get-clients/get-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {path: '',
  children: [
    // {path: '', redirectTo: '/getClients', pathMatch: 'full'},
    {path: 'getClients', component: GetClientsComponent},
    {path: 'addClient', component: AddClientComponent},
    {path: 'getClientsByID', component: GetClientsByIdComponent},
    {path: 'getClientsByName', component: GetClientsByNameComponent},
    {path: 'getClients/updateClient/:id', component: UpdateClientComponent},
    {path: 'getClientsByName/updateClient/:id', component: UpdateClientComponent},
    // {path: '**', redirectTo: '/getClients', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
