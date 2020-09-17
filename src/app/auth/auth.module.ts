import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
            declarations: [LoginFormComponent, LoginPageComponent],
            imports: [
              CommonModule,
              SharedModule,
              FormsModule,
              AuthRoutingModule
            ]
          })
export class AuthModule {
}
