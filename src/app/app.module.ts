import { FormsModule, NgModel } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { CurrencyPipe } from "@angular/common";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
  imports: [BrowserModule, FormsModule, CurrencyPipe, UserInputModule],
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }