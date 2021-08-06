import { Component, OnInit } from '@angular/core';
import { StepPage } from '../../stepper/components/step-page';

@Component({
  selector: 'app-step-page2',
  templateUrl: './step-page2.component.html',
  styleUrls: ['./step-page2.component.scss']
})
export class StepPage2Component implements OnInit, StepPage {
  label: string;
  showStep : boolean;
  constructor() { 
    this.label = 'Communications'; // To be driven by config from control panel
    this.showStep = true; // To be driven by config from control panel
  }

  ngOnInit() {

  }
}
