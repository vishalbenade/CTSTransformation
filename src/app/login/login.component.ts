import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:string="Eugene Hope";
username:string="OMCORE\OM37184";
hide = true;
  constructor() { }

  ngOnInit(): void {
  }
}
