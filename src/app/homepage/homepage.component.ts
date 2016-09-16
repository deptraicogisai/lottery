import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LotteryService} from "../lottery.service";
import {NgFor} from "@angular/common";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  directives: [NgFor, DashboardComponent]
})
export class HomepageComponent implements OnInit {

  sub: any;
  category: string;
  data: any;

  constructor(private service: LotteryService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.category = params['category']; // (+) converts string 'id' to a numbera
      if (this.category == null) {
        this.category = 'mien-nam-xsmn';
      }

      this.service.getListLottery(this.category).subscribe(
        data => this.data = data
      );
    });
  }

  ngOnInit() {
  }

}
