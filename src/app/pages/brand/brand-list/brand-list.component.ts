import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brandList = [
    { id: 1, name: 'ABC', code: 'ABC' },
    { id: 2, name: 'xyz', code: 'xyz'},
    { id: 3, name: 'dfd', code: 'dfdf'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
