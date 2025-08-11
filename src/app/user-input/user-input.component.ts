import { Component, EventEmitter, Input, Output, signal,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel, InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {
  calculate = output<InvestmentInput>();
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(0);

  constructor(private investmentService: InvestmentService) {}

  inputModel: InvestmentInputModel = new InvestmentInputModel();

 
  @Input() set investmentInput(value: InvestmentInput) {
    if (value) {
      this.initialInvestment.set(value.initialInvestment);
      this.annualInvestment.set(value.annualInvestment);
      this.expectedReturn.set(value.expectedReturn);
      this.duration.set(value.duration);
    }
  }

  onSubmit() {
    this.inputModel = new InvestmentInputModel(
      this.initialInvestment(),
      this.annualInvestment(),
      this.expectedReturn(),
      this.duration()
    );
    this.investmentService.calculateInvestmentResults(this.inputModel);
  }
}
