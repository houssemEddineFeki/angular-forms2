// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/acount.service';
import { SelectedCardComponent } from './selected-card/selected-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { Step1Component } from './step1.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        AddCardComponent,
        SelectedCardComponent,
        Step1Component
    ],
    providers: [
        AccountService
    ]
  })
  export class Step1Module { }
  