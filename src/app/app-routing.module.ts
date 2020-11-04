import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CreateComponent } from './components/main/create/create.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'create', component: CreateComponent },
      { path: '', redirectTo: "dashboard", pathMatch: "full" },
    ]
  },
  { path: '', redirectTo: "auth", pathMatch: 'full' },
  { path: '**', redirectTo: "auth", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
