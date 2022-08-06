import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixerComponent } from './fixer/fixer.component';
import { PepperComponent } from './pepper/pepper.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'pepper', component: PepperComponent },
  { path: 'fixer', component: FixerComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
