import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { latLng, tileLayer, circle, polygon, marker, icon } from 'leaflet';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  myForm!: FormGroup;

  markerPosition: any = {lat: 19.1004019, lng: 72.8817764};

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(19.1004019, 72.8817764)
  };

  layers = [
    marker([19.1004019, 72.8817764], {
      icon: icon({
        iconSize: [35, 35],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png'
      })
    })
  ];

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, this.validateContact]],
      myArray: this.fb.array(
        [
          this.fb.control('', Validators.required)
        ]
      )
    });
  }

  onMapClick(event: any) {
    this.layers = [
      marker([event.latlng.lat, event.latlng.lng], {
        icon: icon({
          iconSize: [35, 35],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        })
      })
    ];
  }

  // onMapClick(event: any) {
  //   let coordinates = event.latLng.toJSON();
  //   console.log(coordinates)
  //   this.markerPosition = {lat: coordinates.lat, lng: coordinates.lng};
  // }

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

  removeField(index: number): void {
    this.myArray.removeAt(index);
  }

  submit() {
    console.log(this.myForm.value)
    this.myForm.markAllAsTouched()
  }


}
