import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
