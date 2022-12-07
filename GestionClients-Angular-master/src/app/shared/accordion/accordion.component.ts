import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  items = [
    { itemName: 'Clients' , crudTypes: [
      {crudName: 'get Clients', route: 'clients/getClients'},
      {crudName: 'add Client', route: 'clients/addClient'},
      {crudName: 'get Client by ID', route: 'clients/getClientsByID'},
      {crudName: 'get Client by Name', route: 'clients/getClientsByName'},
    ]},
    { itemName: 'Regions' , crudTypes: [
      {crudName: 'get Regions', route: 'regions/getRegions'},
    ]},
    { itemName: 'Products' , crudTypes: [
      {crudName: 'get products', route: 'getProducts'},
      {crudName: 'add product', route: 'addProduct'},
    ]},
    { itemName: 'sotres' , crudTypes: [
      {crudName: 'get stores', route: 'getStores'},
      {crudName: 'add store', route: 'addStore'}
    ]},
    { itemName: 'Checkouts' , crudTypes: [
      {crudName: 'get checkouts', route: 'getCheckouts'},
    ]},
    { itemName: 'history' , crudTypes: [
      {crudName: 'get history', route: 'getHistory'},
    ]},
    { itemName: 'users' , crudTypes: [
      {crudName: 'get users', route: 'getUsers'},
      {crudName: 'add user', route: 'addUser'},
    ]}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
