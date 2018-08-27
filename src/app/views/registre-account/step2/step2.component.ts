import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';
import { AccountService } from '../shared/acount.service';

@Component({
  templateUrl: 'step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
  }
}
