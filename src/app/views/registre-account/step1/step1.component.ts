import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';
import { AccountService } from '../shared/acount.service';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  loaded: boolean = false
  index: number;
  tradingOptions: string[] = ['Level 1 (Long only Calls and Puts)', 'Level 2 (Level 1 + Covered Call Write)', 'Level 3 (Level 2 + Spreads)', 'Level 4 (Level 3 + Uncovered Write)']
  accounts: IAccount[] = [];
  displayedAccountType = [];
  accountFormat: string[] = ['Individual', 'Corporate', 'Informal Trust', 'Joint']
  submitted: boolean
  displayOptionTrading: boolean = false
  step1Form: FormGroup
  SelectedAccounts
  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(acc => { this.accounts = acc })
    this.step1Form = this.formBuilder.group({ 
      accountsType: this.formBuilder.array([],Validators.required),
      AccountFormat: ['', Validators.required ],
      options: ['', Validators.required ],
      operations: ['', Validators.required ],
      MarginOption: ['', Validators.required ]
     });
    delay(1000).then(any => {
      //your task after delay.
      this.displayedAccountType = this.accounts.map(obj => obj.acccountName)
      console.log(this.displayedAccountType)
      this.loaded = true
    });
    this.SelectedAccounts = <FormArray>this.step1Form.controls.accountsType;
  }
  checkSelectedCards(): boolean {
    return this.SelectedAccounts.value.length === 0
  }
  onChange(accountT: string, isChecked: boolean) {
    this.SelectedAccounts = <FormArray>this.step1Form.controls.accountsType;

    if (isChecked) {
      this.SelectedAccounts.push(new FormControl(accountT));
    } else {
      let index = this.SelectedAccounts.controls.findIndex(x => x.value == accountT)
      this.SelectedAccounts.removeAt(index);
    }
    console.log(this.SelectedAccounts.value)
  }
  Marginchecked(): boolean
  {
    if(!this.checkSelectedCards()){
      return this.SelectedAccounts.value.indexOf('Margin Account (fully paid)') !== -1
    }
    else
     return false
  }
  hundleOption(evt)
  {
    if(evt.target.value === 'trading' && evt.target.checked)
    this.displayOptionTrading = true
    else
    this.displayOptionTrading = false
  }
  nextStep1(step1Value) {
    this.submitted = true;
    if (this.step1Form.valid) {
      this.router.navigate(['/register-account/step2'])
    }
    this.router.navigate(['/register-account/step2'])
    //console.log(step1Value)
  }

}

async function delay(ms: number) {
  await new Promise(resolve => setTimeout(() => resolve(), 1000)).then(() => console.log("fired"));
}