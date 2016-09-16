import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {LoadingComponent} from "../loading/loading.component";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [LoadingComponent]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  show: boolean = true;
  count: number = 0;
  @Input() name: string;
  @Input() timeout: number;

  constructor() {
  }

  ngOnInit() {

  }


  ngAfterViewInit() {

    setTimeout(() => {
        this.show=false;
      },
      this.timeout * 1000);
  }

}
