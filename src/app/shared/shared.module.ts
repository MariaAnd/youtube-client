import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {YoutubeInterceptor} from './interseptors/youtube-interseptor/youtube-interceptor.service';

@NgModule({
            declarations: [],
            imports: [
              CommonModule,
              MaterialModule
            ],
            providers: [
              {
                provide: HTTP_INTERCEPTORS,
                useClass: YoutubeInterceptor,
                multi: true
              }
            ],
            exports: [
              MaterialModule]
          })
export class SharedModule {
}
