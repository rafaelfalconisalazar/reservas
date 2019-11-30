import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component'
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PrincipalComponent.URL },
  { path: PrincipalComponent.URL, component: PrincipalComponent },
  { path: InfoComponent.URL, component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
