import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
            declarations: [LoginFormComponent, LoginPageComponent],
            exports: [LoginFormComponent, LoginPageComponent],
            imports: [
              CommonModule,
              SharedModule,
              FormsModule
            ]
          })
export class AuthModule {
}
