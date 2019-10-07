import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterLoginComponent } from './components/after-login/after-login.component';


const routes: Routes = [
  {path: 'auth_success', component: AfterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
