import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-module';
import {SharedService} from './services/shared-service/shared.service';

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
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
}
