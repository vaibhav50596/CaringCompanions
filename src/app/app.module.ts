import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindOpportunitiesComponent } from './find-opportunities/find-opportunities.component';
import { HttpClientModule } from '@angular/common/http';
import { IndividualComponent } from './individual-component/individual-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FindOpportunitiesComponent,
    IndividualComponent,
    HomePageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
