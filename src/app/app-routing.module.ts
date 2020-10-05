import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [ MainGuard ] },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
