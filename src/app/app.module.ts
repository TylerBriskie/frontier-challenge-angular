import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountListComponent } from './account-list/account-list.component';
import {HttpClient} from '@angular/common/http';
import { AccountStatusPipe } from './account-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountListComponent,
    AccountStatusPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
