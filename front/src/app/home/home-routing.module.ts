import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixerComponent } from './fixer/fixer.component';
import { PepperComponent } from './pepper/pepper.component';

const routes: Routes = [
  { path: 'pepper', component: PepperComponent },
  { path: 'fixer', component: FixerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
