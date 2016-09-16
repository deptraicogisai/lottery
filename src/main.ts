import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from "@angular/http";
import {LotteryService} from "./app/lottery.service";
import {APP_ROUTER_PROVIDERS} from "./app/app.route";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, LotteryService, APP_ROUTER_PROVIDERS]);
