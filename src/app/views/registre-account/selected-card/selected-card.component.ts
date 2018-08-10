import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAccount } from '../account';

@Component({
  selector: 'selected-card',
  templateUrl: './selected-card.component.html',
  styleUrls: ['./selected-card.component.css']
})
export class SelectedCardComponent {
    @Input() accountSelected:IAccount;
    @Output() removeClicked: EventEmitter<IAccount> = new EventEmitter<IAccount>();
    onClick(){
        this.removeClicked.emit(this.accountSelected);
    }
}