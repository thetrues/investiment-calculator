import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  
  investmentResults = signal<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined>(undefined);

  
  calculateInvestmentResults(data: InvestmentInput) {
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
  this.investmentResults.set(annualData);
}
}