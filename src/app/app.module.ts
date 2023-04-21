import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NewsComponent } from './news/news.component';
import { LOGINComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegioniComponent } from './regioni/regioni.component';
import { RegioneComponent } from './regione/regione.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsFilterPipe } from './news-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChiSiamoComponent,
    ContattiComponent,
    NewsComponent,
    LOGINComponent,
    NotFoundComponent,
    RegioniComponent,
    RegioneComponent,
    DashboardComponent,
    NewsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
