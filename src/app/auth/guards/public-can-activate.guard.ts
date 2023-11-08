import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const PublicCanActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkAuthentication()
      .pipe(
        tap(isLogin=>console.log({isLogin})),
        tap(isLogin => {
          if(isLogin) router.navigate(["./"])
        }),
        map(isLogin => !isLogin)
      )
}
