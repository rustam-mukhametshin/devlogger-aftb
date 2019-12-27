import {Injectable} from '@angular/core';
import {Log} from '../models/Log';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:22')},
      {id: '2', text: 'Added Bootstrap', date: new Date('1/15/2017 12:54:11')},
      {id: '3', text: 'Added logs component', date: new Date('4/12/2014 12:54:32')},
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }
}
