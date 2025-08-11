export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}
export class InvestmentInputModel implements InvestmentInput {
  constructor(
    public initialInvestment: number = 0,
    public annualInvestment: number = 0,
    public expectedReturn: number = 5,
    public duration: number = 0
  ) {}
}