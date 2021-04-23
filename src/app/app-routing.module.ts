import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataLoaderDashboardComponent } from './data-loader-dashboard/data-loader-dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'dataloaderdashboard',component:DataLoaderDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
