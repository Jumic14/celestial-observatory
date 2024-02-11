import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TelescopeHubComponent } from './components/telescope-hub/telescope-hub.component';
import { CosmicCarouselComponent } from './components/cosmic-carousel/cosmic-carousel.component';
import { IssExplorerComponent } from './components/iss-explorer/iss-explorer.component';
import { TelescopeComponent } from './components/telescope/telescope.component';
import { CelestialPortalComponent } from './components/celestial-portal/celestial-portal.component';
import { CreditsComponent } from './components/credits/credits.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent, data: { hideHeaderFooter: true } },
  { path: 'celestial-portal', component: CelestialPortalComponent },
  { path: 'iss-explorer', component: IssExplorerComponent },
  { path: 'telescope-hub', component: TelescopeHubComponent },
  { path: 'cosmic-carousel', component: CosmicCarouselComponent },
  { path: 'telescope-hub/:id', component: TelescopeComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
