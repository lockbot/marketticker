import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FixerComponent } from './fixer/fixer.component';
import { PepperComponent } from './pepper/pepper.component';

import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    FixerComponent,
    PepperComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule
  ]
})
export class HomeModule { }
