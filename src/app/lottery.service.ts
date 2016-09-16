import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/Rx'
@Injectable()
export class LotteryService {

  constructor(private http: Http) {

  }

  getListLottery(category: string) {
    return this.http.get('http://localhost:8021/api/Values/getResult/' + category).map(data =>data.json());
  }

}
