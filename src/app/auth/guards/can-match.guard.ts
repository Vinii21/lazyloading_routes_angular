import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';



export const CanMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
      tap(isAuthenticated => {
        if(!isAuthenticated) router.navigate(["/auth/login"])
      })
    )
}

