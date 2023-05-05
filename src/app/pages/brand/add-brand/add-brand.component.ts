import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      myArray: this.fb.array([this.fb.control('', Validators.required)], [this.validateMyArray])
    });
  }

  validateMyArray(control: AbstractControl): { [key: string]: boolean } | null {
    const array = control as FormArray;
    if (array.length === 0) {
      return { 'noEntries': true };
    }
    return null;
  }

  get myArray(): FormArray {
    return this.myForm.get('myArray') as FormArray;
  }

  addNewField(): void {
    this.myArray.push(this.fb.control('', Validators.required));
  }

  removeField(index: number): void {
    this.myArray.removeAt(index);
  }

  submit() {
    console.log(this.myForm)
  }
  

}
