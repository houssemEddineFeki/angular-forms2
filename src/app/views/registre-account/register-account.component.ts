import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/acount.service';
import { IAccount } from './account';

@Component({
  templateUrl: 'register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {
  ngOnInit() {
  }
}
