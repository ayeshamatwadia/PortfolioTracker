import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareSaveComponent } from './components/share-save/share-save.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'app', component : AppComponent},
  {path: 'save/share', component: ShareSaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
