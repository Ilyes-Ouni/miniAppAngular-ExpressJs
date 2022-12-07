import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { ClientsRoutingModule } from './clients-routing.module';
import { GetClientsComponent } from './get-clients/get-clients.component';
import { MaterialModule } from "../material/material.module";
import { GetClientsByIdComponent } from './get-clients-by-id/get-clients-by-id.component';
import { GetClientsByNameComponent } from './get-clients-by-name/get-clients-by-name.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { SharedModule } from "../shared/shared.module";
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
    declarations: [
        GetClientsComponent,
        GetClientsByIdComponent,
        GetClientsByNameComponent,
        UpdateClientComponent,
        AddClientComponent,
    ],
    imports: [
        CommonModule,
        ClientsRoutingModule,
        MaterialModule,
        CdkAccordionModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class ClientsModule { }
