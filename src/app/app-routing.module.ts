import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtlasComponent } from './atlas/atlas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atlas', component: AtlasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
