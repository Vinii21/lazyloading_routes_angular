import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';



export const PublicCanMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
      tap(isLogin=>console.log({isLogin})),
      tap(isLogin => {
        if(isLogin) router.navigate(["./"])
      }),
      map(isLogin => !isLogin)
    )
}

