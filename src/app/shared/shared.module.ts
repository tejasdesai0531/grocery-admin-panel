import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './component/select/select.component';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectComponent,
    DatePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
