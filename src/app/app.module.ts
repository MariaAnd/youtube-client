import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SortBarComponent} from './components/sort-bar/sort-bar.component';
import {LoginInfoBlockComponent} from './components/login-info-block/login-info-block.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {LogoComponent} from './components/logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import {SettingsButtonComponent} from './components/settings-button/settings-button.component';
import {SharedService} from './services/shared-service/shared.service';
import {SortByParamPipe} from './pipes/sort-by-param/sort-by-param.pipe';
import {HighlightPublicationDateDirective} from
    './directives/hightlight-publication-date/highlight-publication-date.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
            declarations: [
              AppComponent,
              HeaderComponent,
              SearchResultsComponent,
              SearchItemComponent,
              SearchBarComponent,
              SortBarComponent,
              LoginInfoBlockComponent,
              LogoComponent,
              SettingsButtonComponent,
              SortByParamPipe,
              HighlightPublicationDateDirective
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MaterialModule,
              FormsModule
            ],
            providers: [SearchService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
