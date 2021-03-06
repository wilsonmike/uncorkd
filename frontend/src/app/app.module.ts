import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { NaPageComponent } from './na-page/na-page.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { SubmitBourbonComponent } from './submit-bourbon/submit-bourbon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    NaPageComponent,
    FourZeroFourComponent,
    SubmitBourbonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


