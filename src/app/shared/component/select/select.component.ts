import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  isDropdownVisible = false

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleVisibility()
    }
  }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.isDropdownVisible = !this.isDropdownVisible
  }

}
