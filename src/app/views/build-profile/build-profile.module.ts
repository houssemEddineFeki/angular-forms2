// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BuildProfileRoutingModule } from './build-profile-routing.module';
import { BuildProfileComponent } from './build-profile.component';
import { AccountService } from '../registre-account/shared/acount.service';
import { HomeProfileModule } from './home-profile/home-profile.module';
import { EmploymentComponent } from './home-profile/employement/employment.component';
import { FinancialComponent } from './home-profile/financial/financial.component';
import { CitizenshipComponent } from './home-profile/Citizenship/citizenship.component';
import { PersonalComponent } from './home-profile/personal/personal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BuildProfileRoutingModule,
        HomeProfileModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        BuildProfileComponent,
        PersonalComponent,
        EmploymentComponent,
        FinancialComponent,
        CitizenshipComponent
    ],
    providers: [
        AccountService
    ]   
  })
  export class BuildProfileModule { }
  