import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { C1Component } from './pages/Categories/c1/c1.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route (redirects to /home)
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'atlas' , component: C1Component},
  { path: '**', redirectTo: '/home' } // Wildcard route (if URL doesn't match, redirect to home)
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
