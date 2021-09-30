import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShareComponent } from './components/add-share/add-share.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'add/share', component: AddShareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
