import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ObservatoryComponent } from './observatory/observatory.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IssPageComponent } from './iss-page/iss-page.component';
import { CelestialDetailComponent } from './celestial-detail/celestial-detail.component';
import { CelestialBodyComponent } from './celestial-body/celestial-body.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'iss-tracker', component: IssPageComponent},
  {path: 'observatory', component: ObservatoryComponent},
  {path: 'gallery', component: GalleryComponent},
  { path: 'detail/:id', component: CelestialDetailComponent }, // Route pour les détails
  { path: 'celestial/:englishName', component: CelestialBodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
