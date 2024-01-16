import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ObservatoryComponent } from './observatory/observatory.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IssPageComponent } from './iss-page/iss-page.component';
import { CelestialBodyComponent } from './celestial-body/celestial-body.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent, data: { hideHeaderFooter: true } },
  { path: 'home', component: HomeComponent },
  {path: 'iss-tracker', component: IssPageComponent},
  {path: 'observatory', component: ObservatoryComponent},
  {path: 'gallery', component: GalleryComponent},
  { path: 'observatory/:id', component: CelestialBodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
