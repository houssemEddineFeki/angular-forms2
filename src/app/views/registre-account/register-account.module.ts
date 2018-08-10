// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterAccountComponent } from './register-account.component';
import { RegisterAccountRoutingModule } from './register-account-routing.module';
import { AddCardComponent } from './add-card/add-card.component';
import { AccountService } from './shared/acount.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCardComponent } from './selected-card/selected-card.component';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RegisterAccountRoutingModule
    ],
    declarations: [
        RegisterAccountComponent,
        AddCardComponent,
        SelectedCardComponent
    ],
    providers: [
        AccountService
    ]
  })
  export class RegisterAccountModule { }
  