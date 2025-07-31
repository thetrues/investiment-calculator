import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {
  @Output() calculate = new EventEmitter<
  { initialInvestment: number;
     annualInvestment: number; expectedReturn: number; duration: number; 
    }>();
   initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 0;

 

   onSubmit() {
   const data = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    };
    this.calculate.emit(data);
    console.log('Form submitted', data);
   }
}
