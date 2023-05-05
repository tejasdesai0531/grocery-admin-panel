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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, this.validateContact]],
      myArray: this.fb.array([this.fb.control('', Validators.required)])
    });
  }

  validateContact(control: AbstractControl): { [key: string]: boolean } | null {

    if(!control.value) return null

    const validPattern = /^\d{10}$/; // Regular expression to match a 10-digit number
    const isValid = validPattern.test(control.value);
    return isValid ? null : { 'invalidContact': true };
  }

  get myArray(): FormArray {
    return this.myForm.get('myArray') as FormArray;
  }

  addNewField(): void {
    this.myArray.push(this.fb.control('', Validators.required));
  }

  removeField(index: number, field: any): void {
    this.myArray.removeAt(index);
  }

  submit() {
    console.log(this.myForm)
    this.myForm.markAllAsTouched()
  }


}
