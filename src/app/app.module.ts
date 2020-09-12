import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {cardsReducer} from './redux/reducers/cards.reducer';

@NgModule({
            declarations: [
              AppComponent
            ],
            imports: [
              BrowserModule,
              BrowserAnimationsModule,
              AppRoutingModule,
              HttpClientModule,
              CoreModule.forRoot(),
              SharedModule,
              StoreModule.forRoot({
                cards: cardsReducer,
                videos: videosReducer
                                  })
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
