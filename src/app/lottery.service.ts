import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/Rx'
@Injectable()
export class LotteryService {

  constructor(private http: Http) {
  }

  getListLottery() {
    this.http.get('http://xskt.com.vn/rss-feed/mien-nam-xsmn.rss').map(data => console.log(data));
  }

}
