// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '../shared/acount.service';
import { Step2Component } from './step2.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        Step2Component
    ],
    providers: [
        AccountService
    ]
  })
  export class Step2Module { }
  