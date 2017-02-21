import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AccountOptionsComponent } from './account-options/account-options.component';

import { GigyaService } from './gigya.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //TODO move to routing module
    RouterModule.forRoot([
      {
        path: '',
        component: AccountOptionsComponent
      },
      {
        path: 'readonly',
        component: AccountOptionsComponent
      }
    ])
  ],
  providers: [
    GigyaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
