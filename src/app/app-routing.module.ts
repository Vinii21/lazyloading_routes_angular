import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { CanActiveGuard } from './auth/guards/can-active.guard';
import { CanMatchGuard } from './auth/guards/can-match.guard';
import { PublicCanActivateGuard } from './auth/guards/public-can-activate.guard';
import { PublicCanMatchGuard } from './auth/guards/public-can-match.guard';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m=>m.AuthModule),
    canActivate: [PublicCanActivateGuard],
    canMatch: [PublicCanMatchGuard]
  },
  {
    path: "heroes",
    loadChildren: () => import("./heroes/heroes.module").then(m=>m.HeroesModule),
    canActivate: [CanActiveGuard],
    canMatch: [CanMatchGuard]
  },
  {
    path: "404",
    component: Error404PageComponent
  },
  {
    path: "",
    redirectTo: "heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
