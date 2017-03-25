import { Route } from '@angular/router';
import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TeradataRoutes } from './teradata/index';
import { landingRoutes } from './landing/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    ...HomeRoutes,
	    ...ChartRoutes,
	    ...BSComponentRoutes,
      ...TableRoutes,
	    ...BlankPageRoutes,
      ...TeradataRoutes,
      ...landingRoutes,
      ...FormRoutes,
      ...GridRoutes,
      ...BSElementRoutes
    	]
  	}
];
