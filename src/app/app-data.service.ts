import { Injectable } from '@angular/core';
import { Report } from './report';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

  lastId: number = 0;
  reports: Report[] = [];

  constructor(
    private api: ApiService
  ) { }

  getAllReports(): Observable<Report[]> {
    return this.api.getReports();
  }

  
}
