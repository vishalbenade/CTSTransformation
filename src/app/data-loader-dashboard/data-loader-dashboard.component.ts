import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-data-loader-dashboard',
  templateUrl: './data-loader-dashboard.component.html',
  styleUrls: ['./data-loader-dashboard.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),      
      transition('default => rotated', animate('500ms ease-in')),
    ]),
  ],
})
export class DataLoaderDashboardComponent implements OnInit {
  user: string = 'Eugene Hope';
  state: string = 'default';
  displayedColumns: string[] = ['select', 'fileName','taxPeriod','landedDate','rangeStart', 'rangeEnd','status'];
  transactions: any[] = [
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
    {select: '', fileName: 'XCTSGCS_20201109T131650_20201109T191706373.txt',taxPeriod:'December 2020',landedDate:'10/12/2020 12:49:00',rangeStart:'24/11/2020',rangeEnd:'24/11/2020',status:'Ready to process'},
  ];
  constructor() {}

  ngOnInit(): void {}
  rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
}
