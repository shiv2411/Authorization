import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

    canActivate() {

     const user = this.authService.CurrentUser;
     if (user && user.admin) {
     return true;
     }
     this.router.navigate(['/no-access']);
     return false;




    }


}
