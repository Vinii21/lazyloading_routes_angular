import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';



export const CanActiveGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkAuthentication().pipe(
        tap(isAuthenticated => {
          if(!isAuthenticated) router.navigate(["/auth/login"])
        })
      )
}
