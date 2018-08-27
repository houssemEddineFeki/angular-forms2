// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/acount.service';
import { Step4Component } from './step4.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        Step4Component
    ],
    providers: [
        AccountService
    ]
  })
  export class Step4Module { }
  