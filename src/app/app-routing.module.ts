import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NewsComponent } from './news/news.component';
import { LOGINComponent } from './login/login.component';
import { RegioniComponent } from './regioni/regioni.component';
import { RegioneComponent } from './regione/regione.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard'; //importo la risorsa dove è dichiarata l'interface canActivate

import { NotFoundComponent } from './not-found/not-found.component';

//array delle rotte: ci permette di abbinare il PATH di una rotta e Component che sarà attivato alla chiamata di questa rotta 
const routes: Routes = [

  {path: "", redirectTo:"/home", pathMatch:'full'},//localhost:4200/home
  {path: "home", component: HomeComponent},//localhost:4200/home
  {path: "chi-siamo", component: ChiSiamoComponent},//localhost:4200/chi-siamo
  {path: "contatti", component: ContattiComponent},//localhost:4200/contatti
  {path:"regioni", component:RegioniComponent},//localhost:4200/regioni
  
  //Aggiungiamo la rotta di secondo livello parametrica: //localhost:4200/regione/Liguria...
  {path:"regione/:nome", component: RegioneComponent},

  /*
  qui dobbiamo aggiungere il collegamento con il file della guard. In pratica gli sto dicendo che se navigo verso la rotta parametrica, la sua attivazione dipenderà da ciò che è scritto nel metodo canActivate.


  */
  {path: "dashboard/:token", component: DashboardComponent, canActivate: [AuthGuard]},
  
  {path: "news", component: NewsComponent, canActivate:[AuthGuard]},//localhost:4200/news
  {path: "login", component: LOGINComponent},//localhost:4200/login
  {path: "**", component: NotFoundComponent},//localhost:4200/not-found


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
