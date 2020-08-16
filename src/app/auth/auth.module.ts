import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
            declarations: [LoginFormComponent],
            exports: [LoginFormComponent],
            imports: [
              CommonModule,
              SharedModule,
              FormsModule
            ]
          })
export class AuthModule {
}
