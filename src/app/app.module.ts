import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardComponent } from './layout/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StandardComponent} from "./pages/ice/standard/standard.component";

@NgModule({
    declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    StandardComponent,
    FooterComponent
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
