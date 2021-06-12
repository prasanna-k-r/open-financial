import { Options } from '@angular-slider/ngx-slider';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'slideToggle';
  id = 'materialSlideToggle';
  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';

  title = 'open-financial';
  value: number = 150000;
  value1: number = 150000;
  selected: string = "";
  options: Options = {
    floor: 100000,
    ceil: 300000,
    showSelectionBar: true,
    translate: (value: number): string => {
      return this.getIndianCurrencyFormat(value);
    },
    getSelectionBarColor: (value: number): string => {
      return '#663399';
    },
    getPointerColor: (value: number): string => {
      return '#663399';
    },
    getTickColor: (value: number): string => {
      return '#663399';
    },
    getLegend: (value: number): string => {
      return '#663399';
    },
    hidePointerLabels:true,
    reversedControls:true,
    
  };
  options2: Options = {
    floor: 100000,
    ceil: 300000,
    showSelectionBar: true,
    translate: (value: number): string => {
      return this.getIndianCurrencyFormat(value);
    },
    getSelectionBarColor: (value: number): string => {
      return '#663399';
    },
    getPointerColor: (value: number): string => {
      return '#663399';
    },
    getTickColor: (value: number): string => {
      return '#663399';
    },
    getLegend: (value: number): string => {
      return '#663399';
    },
    hidePointerLabels:true,
    reversedControls:true,
    hideLimitLabels:true
  };
  selectedValue : string = "";
  months: any[] = [
    {value: '3', viewValue: '3 Months'},
    {value: '6', viewValue: '6 Months'},
    {value: '9', viewValue: '9 Months'},
    {value: '12', viewValue: '12 Months'}
  ];
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.pageYOffset > 100) {
      console.log('550');
      let element: any = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      console.log('!550');
      let element: any = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

  getIndianCurrencyFormat(data: any) {
    if (null != data) {
      return Number(data).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      });
    } else {
      return Number(0).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      });
    }
  }
}
