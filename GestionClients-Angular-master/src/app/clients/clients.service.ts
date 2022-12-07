import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url: string=environment.APIURL;
  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.url}/getClients`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  deleteClient(ID:number){
    return this.http.delete(`${this.url}/deleteClient/${ID}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  updateClient(newClient:any){
    return this.http.put(`${this.url}/updateClient`, newClient, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  addClient(client:object){
    return this.http.post(`${this.url}/addClient`, client, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  getClient(clientID:number){
    console.log(clientID)
    return this.http.get(`${this.url}/getClient/${clientID}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  checkRole(){
    return this.http.get(`${this.url}/checkRole`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

}
