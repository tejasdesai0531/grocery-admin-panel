import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  selectedStartDate: Date = new Date();
  selectedEndDate: Date | null = null;
  showDatepicker: boolean = false;
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  blankDays: any[] = [];
  monthDates: any[] = [];

  constructor() {
    this.generateCalendar();
  }

  showDatePicker() {
    this.showDatepicker = !this.showDatepicker;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  selectDate(date: Date) {
    if(!this.selectedStartDate) {
      this.selectedStartDate = date
    } else {
      this.selectedEndDate = date
    }
    // this.showDatepicker = false;
  }

  generateCalendar() {
    this.blankDays = []
    this.monthDates = [];
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDayOfWeek = lastDayOfMonth.getDay();
    for (let i = 1; i <= numberOfDays; i++) {
      this.monthDates.push(new Date(this.currentYear, this.currentMonth, i));
    }
    console.log("ZZZ : ", firstDayOfWeek)
    // Add blank days to beginning of calendar
    for (let i = 0; i < firstDayOfWeek; i++) {
      this.blankDays.push({});
    }
    // Add blank days to end of calendar
    // for (let i = lastDayOfWeek + 1; i < 7; i++) {
    //   this.blankDays.push({});
    // }
  }

  getBGColor(date: any) {
    console.log(date === this.selectedStartDate.setHours(0, 0, 0, 0))
    if(date === this.selectedStartDate.setHours(0, 0, 0, 0)) {
      return 'blue'
    } else {
      return 'white'
    }
  }
}
