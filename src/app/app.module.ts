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
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import {SearchService} from './services/search.service';
import { SortByDatePipe } from './pipes/sort-by-date/sort-by-date.pipe';
import { HighlightPublicationDateDirective } from './directives/hightlight-publication-date/highlight-publication-date.directive';

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
              SortByDatePipe,
              HighlightPublicationDateDirective
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              HttpClientModule,
              MaterialModule
            ],
            providers: [SearchService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
