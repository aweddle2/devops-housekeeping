import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ListRepoComponent } from './list-repo/list-repo.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'list-repos', component: ListRepoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
