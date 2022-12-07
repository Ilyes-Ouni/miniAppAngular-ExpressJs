import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteDetectorService {
  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');
  data: Observable<string> = this.dataSource.asObservable();

  constructor() { }

  setURL(data: string) {
    this.dataSource.next(data);
  }
}
