import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBrandComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    NzGridModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class BrandModule { }
