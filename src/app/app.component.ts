import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investiment-calculator';

  onCalculateInvestmentResults(data: {initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number}) {
  const annualData = [];
  console.log('Calculating investment results with data:', data);
  const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
   
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

 console.log('Investment Results:', annualData);
}
}
