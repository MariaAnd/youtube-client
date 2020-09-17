import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {HighlightPublicationDateDirective} from
    './directives/hightlight-publication-date/highlight-publication-date.directive';
import {SortByParamPipe} from './pipes/sort-by-param/sort-by-param.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {DetailedInformationPageComponent}
  from './pages/detailed-information-page/detailed-information-page.component';
import {SearchItemDetailedInfoComponent}
  from './components/search-item-detailed-info/search-item-detailed-info.component';
import {YoutubeRoutingModule} from './youtube-routing.module';
import {YoutubeService} from './services/youtube-service/youtube.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
            declarations: [
              SearchResultsComponent,
              SearchItemComponent,
              HighlightPublicationDateDirective,
              SortByParamPipe,
              MainPageComponent,
              DetailedInformationPageComponent,
              SearchItemDetailedInfoComponent,
              AdminComponent,
              AdminPageComponent
            ],
            providers: [
              YoutubeService
            ],
            imports: [
              CommonModule,
              SharedModule,
              FlexLayoutModule,
              YoutubeRoutingModule,
              FormsModule,
            ]
          })
export class YoutubeModule {
}
