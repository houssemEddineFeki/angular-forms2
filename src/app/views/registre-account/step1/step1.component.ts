import { Component, OnInit } from '@angular/core';
import { IAccount } from '../account';
import { AccountService } from '../shared/acount.service';

@Component({
  templateUrl: 'step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  index: number;
  SelectedAccounts: IAccount[] = [];
  accounts: IAccount[] = [];
  accountTypes: string[] = ["Retirement", "Margin", "Entity", "Forex_and_CFDs", "Education"]
  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(acc => { this.accounts = acc });
  }
  handleCardClick(AccountData: IAccount): void {
    //console.log(AccountData);
    this.index = this.SelectedAccounts.indexOf(AccountData);
    if (this.index !== -1) {
      this.SelectedAccounts.splice(this.index, 1);
    }
    else
      this.SelectedAccounts.push(AccountData);
  }
 /* handleRemoveClick(accountRM: IAccount): void{

  }*/
  FiltredAccounts(filterBy: string): IAccount[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.accounts.filter((account: IAccount) =>
      account.accountType.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  checkSelectedCards(): boolean{
    return this.SelectedAccounts.length ===0
  }

}
