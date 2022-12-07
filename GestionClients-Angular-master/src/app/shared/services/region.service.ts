import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from 'src/app/clients/region';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  private dataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data: Observable<number> = this.dataSource.asObservable();
  url: string=environment.APIURL;

  constructor(private http: HttpClient) { }


  sendData(data: number) {
    this.dataSource.next(data);
  }

  getRegions(){
    return this.http.get(`${this.url}/getRegions`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  deleteRegion(regionID: number){
    return this.http.delete(`${this.url}/deleteRegion/${regionID}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  updateRegion(region: Region){
    return this.http.put(`${this.url}/updateRegion`, region, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  addRegion(region: Region){
    console.log(region)
    return this.http.post(`${this.url}/addRegion`, region, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

  getRegion(regionID: number){
    return this.http.get(`${this.url}/getRegion/${regionID}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')?.toString()}`}});
  }

}
