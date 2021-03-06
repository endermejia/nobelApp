import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {NobelRoutingModule} from './nobel-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {GalardonComponent} from './pages/galardon/galardon.component';
import {HomeComponent} from './pages/home/home.component';
import {SearchComponent} from './pages/search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    GalardonComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NobelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NobelModule {
}
