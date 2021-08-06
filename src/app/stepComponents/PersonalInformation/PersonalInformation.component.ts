import { Component, OnInit } from '@angular/core';
import { StepPage } from '../../stepper/components/step-page';

@Component({
  selector: 'app-PersonalInformation',
  templateUrl: './PersonalInformation.component.html',
  styleUrls: ['./PersonalInformation.component.scss']
})
export class PersonalInformationComponent implements OnInit, StepPage {
  label: string;
  showStep : boolean;
  constructor() { 
    this.label = 'Personal'; // To be driven by config from control panel
    this.showStep = true; // To be driven by config from control panel
  }

  ngOnInit() {

  }
}
