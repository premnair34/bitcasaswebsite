import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtlasComponent } from './atlas/atlas.component';
import { FaqComponent } from './faq/faq.component';
import { CareersComponent } from './careers/careers.component';
const routes: Routes = [
  { path: '', component: AtlasComponent },
  { path: 'atlas', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'careers', component: CareersComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
