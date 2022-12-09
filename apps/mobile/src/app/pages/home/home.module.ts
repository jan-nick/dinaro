import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {
  AddExpenseButtonModule,
  ExpenseListModule,
  ExpensesFilterModule,
} from '@dinaro/expenses/mobile';
import { DataCardModule } from '@dinaro/ui/mobile';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    AddExpenseButtonModule,
    CommonModule,
    DataCardModule,
    ExpenseListModule,
    IonicModule,
    HomeRoutingModule,
    TranslateModule,
    ExpensesFilterModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
