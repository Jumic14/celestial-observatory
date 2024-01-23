import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IssTrackerComponent } from './iss-tracker/iss-tracker.component';
import { ObservatoryComponent } from './observatory/observatory.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IssPageComponent } from './iss-page/iss-page.component';
import { KnowncountComponent } from './knowncount/knowncount.component';
import { CelestialBodyComponent } from './celestial-body/celestial-body.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CodexComponent } from './codex/codex.component';
import { CreditsComponent } from './credits/credits.component';
import { InfosComponent } from './infos/infos.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    IssTrackerComponent,
    ObservatoryComponent,
    GalleryComponent,
    CarouselComponent,
    IssPageComponent,
    KnowncountComponent,
    CelestialBodyComponent,
    HomeComponent,
    FooterComponent,
    CodexComponent,
    CreditsComponent,
    InfosComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
