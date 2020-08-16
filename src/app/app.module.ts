import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {YoutubeModule} from './youtube/youtube.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              HttpClientModule,
              CoreModule,
              YoutubeModule,
              AuthModule
            ],
            providers: [SearchService],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
