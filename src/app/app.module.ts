import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './pages/home/hero-section/hero-section.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { LatestBooksComponent } from './pages/home/latest-books/latest-books.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';  // <-- Add this import
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { C1Component } from './pages/Categories/c1/c1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    CategoriesComponent,
    LatestBooksComponent,
    AboutusComponent,
    C1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
