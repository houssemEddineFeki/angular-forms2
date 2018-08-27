// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeProfileComponent } from './home-profile.component';
import { RouterModule } from '@angular/router';
import { AccountService } from '../../registre-account/shared/acount.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        HomeProfileComponent,
        ProfileCardComponent
    ],
    providers: [
        AccountService
    ]
  })
  export class HomeProfileModule { }
  