import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {HighlightPublicationDateDirective} from
    './directives/hightlight-publication-date/highlight-publication-date.directive';
import {SortByParamPipe} from './pipes/sort-by-param/sort-by-param.pipe';
import {SharedService} from '../core/services/shared-service/shared.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
            declarations: [
              SearchResultsComponent,
              SearchItemComponent,
              HighlightPublicationDateDirective,
              SortByParamPipe,
            ],
            exports: [
              SearchResultsComponent
            ],
            providers: [SharedService],
            imports: [
              CommonModule,
              SharedModule,
              FlexLayoutModule,
            ]
          })
export class YoutubeModule {
}
