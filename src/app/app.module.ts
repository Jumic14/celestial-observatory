import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaceFormatPipe } from './pipes/space-format.pipe';
import { LanguageService } from './services/language.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IssTrackerComponent } from './components/iss-tracker/iss-tracker.component';
import { TelescopeHubComponent } from './components/telescope-hub/telescope-hub.component';
import { CosmicCarouselComponent } from './components/cosmic-carousel/cosmic-carousel.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IssExplorerComponent } from './components/iss-explorer/iss-explorer.component';
import { KnowncountComponent } from './components/knowncount/knowncount.component';
import { TelescopeComponent } from './components/telescope/telescope.component';
import { CelestialPortalComponent } from './components/celestial-portal/celestial-portal.component';
import { FooterComponent } from './components/footer/footer.component';
import { CodexComponent } from './components/codex/codex.component';
import { CreditsComponent } from './components/credits/credits.component';
import { InfosComponent } from './components/infos/infos.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    IssTrackerComponent,
    TelescopeHubComponent,
    CosmicCarouselComponent,
    CarouselComponent,
    IssExplorerComponent,
    KnowncountComponent,
    TelescopeComponent,
    CelestialPortalComponent,
    FooterComponent,
    CodexComponent,
    CreditsComponent,
    InfosComponent,
    AboutComponent,
    SpaceFormatPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LanguageService],

  bootstrap: [AppComponent],
})
export class AppModule {}
