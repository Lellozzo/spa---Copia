import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private loginService: LoginService, private router:Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //se noi invochiamo il metodo canActivate la rotta viene permessa
      //dobbiamo trovare una strategia per far in modo che in alcuni casi (quando entro direttamente dall'URL della rotta /dashboard/<token>) il metodo restituisca false 

      if(this.loginService.isUserLoggedIn()){
        console.log("rotta permessa")
        return true; // solo quando sono autenticato, ovvero debbo passare per forza per la form di Login
      }else{
        console.log("rotta non permessa")
        //alert("Rotta non permessa. Non si dispone di autenticazione. Sarai ridirezionato alla pagina di Login");
        this.router.navigate(['login']);
        return false;
      }
      
     
      //quando ricarico la pagina di Login debbo restare nella dashboard se sono autenticato. Questa cosa va risolta a livello web server scrivendo una riga di codice nel file .htaccess (in questo file ci sono scritte tutte le regole per l'url rewriting) per restare nella rotta dove sono quando ricarico la pagina 
  
  
    }
  
}
