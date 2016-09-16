import {Component, Renderer, ViewChild, ElementRef} from '@angular/core';
import {LotteryService} from "./lottery.service";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AdvertisementComponent} from "./advertisement/advertisement.component";

declare const X2JS: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, FooterComponent, AdvertisementComponent, ROUTER_DIRECTIVES]
  ,
})
export class AppComponent {
  title = 'app works!';

  xmlJson: any;
  data: any;

  @ViewChild('scrollTop') scrollTop: ElementRef

  constructor( private renderer: Renderer, private elment: ElementRef) {
    this.xmlJson = new X2JS();
    // this.renderer.listenGlobal('window', 'scroll', (evt) => {
    //   if (evt.currentTarget.scrollY > 100) {
    //     $(this.scrollTop.nativeElement)['fadeIn']();
    //   } else {
    //     $(this.scrollTop.nativeElement)['fadeOut']();
    //   }
    // });

  }

  scrollToTop(){
    var body = document.getElementsByTagName('body');
    $('body')['animate']({scrollTop : 0},800);
  }

}
