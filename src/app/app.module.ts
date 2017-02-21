import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AccountOptionsComponent } from './account-options/account-options.component';

import { GigyaApiService } from './gigya-api.service';

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
    GigyaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
