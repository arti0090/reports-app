import { Component, OnInit } from '@angular/core';
import { AppDataService } from './app-data.service';
import { Report } from './report';
import {MatDatepickerInputEvent} from '@angular/material' 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppDataService]
})
export class AppComponent implements OnInit {
  title = 'reports-app';
  office = '';

  reports:  Report[] = [];
  allReports: Report[] = [];

  constructor(private appDataService: AppDataService){
  }

  public ngOnInit() {
    this.appDataService
      .getAllReports()
      .subscribe(
        (reports) => {
          this.reports = reports;
          this.splitDate();
          console.log(reports);
          this.allReports = this.reports;
        }
      );
  };

  public splitDate() {
  this.reports.forEach(Report => {
    Report.time = this.BeautifyTime(Report.date.split('T')[1]);
    Report.date = Report.date.split('T')[0];
    })
  };

  onEnter(value: string) { 
    this.office = value;

    if(this.office != ''){
      this.reports = [];

    this.allReports.forEach(Report => {
      if(Report.office == this.office){
        this.reports.push(Report);
      }
    });
  }
    else{
      this.reports = this.allReports;
    }
 };

 public dateFrom(type: string, event: MatDatepickerInputEvent<Date>) {
  this.reports = [];
  this.allReports.forEach(Report => {
    let date = new Date(Report.date);
    if(date > event.value ){
      this.reports.push(Report);
    }
    
  });
}

public dateTo(type: string, event: MatDatepickerInputEvent<Date>) {
  this.reports = [];
  this.allReports.forEach(Report => {
    let date = new Date(Report.date);
    if(date < event.value ){
      this.reports.push(Report);
    }
    
  });
};

  public BeautifyTime(uglyTime) {
    return uglyTime.split('.')[0];
};

}
