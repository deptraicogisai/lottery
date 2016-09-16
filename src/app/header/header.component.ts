import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebar') sidebar: ElementRef

  constructor() {
  }

  ngOnInit() {
    $(this.sidebar.nativeElement)['sidebar']('toggle');
  }

  toogleSidebar() {
    $(this.sidebar.nativeElement)['sidebar']('toggle');
  }


}
