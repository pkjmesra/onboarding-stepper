import { Injectable } from '@angular/core';
import { StepPage } from '../components/step-page';
import { PersonalInformationComponent } from '../../stepComponents/PersonalInformation/PersonalInformation.component';
import { StepPage2Component } from '../../stepComponents/step-page2/step-page2.component';
import { StepPage3Component } from '../../stepComponents/step-page3/step-page3.component';

@Injectable({
  providedIn: 'root'
})
export class OnboardingPagesService {

  constructor() { }

  public getSteps(): Array<StepPage> {
    // This would actually return based on what you receive from the config -> control panel
    return [
      PersonalInformationComponent,
      StepPage2Component, // Communication
      StepPage3Component // Summary
      // etc.
    ];
  }
}
