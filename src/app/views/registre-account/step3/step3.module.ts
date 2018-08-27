// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/acount.service';
import { Step3Component } from './step3.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        Step3Component,
    ],
    providers: [
        AccountService
    ]
  })
  export class Step3Module { }
  