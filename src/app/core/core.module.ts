import {ModuleWithProviders, NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {SortBarComponent} from './components/sort-bar/sort-bar.component';
import {LoginInfoBlockComponent} from './components/login-info-block/login-info-block.component';
import {LogoComponent} from './components/logo/logo.component';
import {SettingsButtonComponent} from './components/settings-button/settings-button.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {Error404Component} from './components/error404/error404.component';
import {SharedService} from './services/shared-service/shared.service';
import {YoutubeService} from '../youtube/services/youtube-service/youtube.service';

@NgModule({
            declarations: [
              HeaderComponent,
              SearchBarComponent,
              SortBarComponent,
              LoginInfoBlockComponent,
              LogoComponent,
              SettingsButtonComponent,
              Error404Component],
            exports: [
              HeaderComponent,
              Error404Component
            ],
            providers: [
              YoutubeService
            ],
            imports: [
              CommonModule,
              FormsModule,
              SharedModule
            ]
          })
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [SharedService]
    };
  }
}
