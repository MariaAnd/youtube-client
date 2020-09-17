import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailedInformationPageComponent}
  from './pages/detailed-information-page/detailed-information-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: ':id',
    component: DetailedInformationPageComponent
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })
export class YoutubeRoutingModule {
}
