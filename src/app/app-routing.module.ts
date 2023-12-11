import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IssTrackerComponent } from './iss-tracker/iss-tracker.component';
import { ObservatoryComponent } from './observatory/observatory.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'iss-tracker', component: IssTrackerComponent},
  {path: 'observatory', component: ObservatoryComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
