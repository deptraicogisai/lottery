/**
 * Created by Clearpath on 9/13/2016.
 */
import {provideRouter, RouterConfig} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";


export const routes: RouterConfig = [
  {path: '', component: HomepageComponent },
  {path: ':category', component: HomepageComponent}
];

// Export routes
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


