import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutMeComponent,
    ProjectsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    HammerModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
