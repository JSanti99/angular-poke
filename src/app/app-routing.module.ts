import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { IdkGuard } from './idk/idk.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [IdkGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
