import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './stepper/components/OnboardingComponent/Onboarding.component';
import { MatStepperModule} from '@angular/material/stepper';
import { PersonalInformationComponent } from './stepComponents/PersonalInformation/PersonalInformation.component';
import { StepPage2Component } from './stepComponents/step-page2/step-page2.component';
import { StepPage3Component } from './stepComponents/step-page3/step-page3.component';
import { PageDirective } from './stepper/page.directive';
import { StepPageWrapperComponent } from './stepper/components/StepPageWrapperComponent/step-page-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    PersonalInformationComponent,
    StepPage2Component,
    StepPage3Component,
    PageDirective,
    StepPageWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PersonalInformationComponent,
    StepPage2Component,
    StepPage3Component,
    StepPageWrapperComponent
  ]

  
})
export class AppModule { }
