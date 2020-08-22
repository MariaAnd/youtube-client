import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-module';
import {SharedService} from '../core/services/shared-service/shared.service';

@NgModule({
            declarations: [],
            imports: [
              CommonModule,
              MaterialModule
            ],
            exports: [
              MaterialModule]
          })
export class SharedModule {
}
