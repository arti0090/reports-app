import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

import { Report } from './report';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";



const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { 
  }

  //API get reports
  public getReports(): Observable<Report[]> {
    return this.http.get(API_URL + '/reports')
    .pipe(
        map(response => {
          const reports = response.json();
          return reports.map((report) => new Report(report));
        }));
  }


}
