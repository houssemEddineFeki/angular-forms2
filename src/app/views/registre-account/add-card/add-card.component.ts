import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAccount } from '../account';

@Component({
  selector: 'add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
    @Output() cardClicked: EventEmitter<IAccount> = new EventEmitter<IAccount>();
    @Input() account2:IAccount;
    isSelected: boolean = false;

onClick(){
    this.isSelected = !this.isSelected;
    this.cardClicked.emit(this.account2);
}
getNgClass(){
    if(this.isSelected)
        return ['selectedCard'];
    else    
        return ['hoveredBlock'];
}
}