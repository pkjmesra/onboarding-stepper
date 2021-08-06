import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepper } from '@angular/material/stepper';
import { OnboardingPagesService } from '../../service/onboarding-pages.service';
import { StepPage } from '../step-page';

@Component({
  selector: 'app-Onboarding',
  templateUrl: './Onboarding.component.html',
  styleUrls: ['./Onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  totalStepsCount: number;
  public steps: StepPage[];
  public showStepper: boolean;

  constructor(private stepsService: OnboardingPagesService) { 
    this.steps = stepsService.getSteps();
    // Not using it right now, but we should be able to show
    // or hide the entire stepper if we need to. There can be
    // three cases:
    // 1. Show the stepper header 1> 2> 3> along with content components
    // 2. Just hide the header and show the contained components
    // 3. Hide both header and contained components
    // All of these will need to be handled
    this.showStepper = true;
  }

  public ngOnInit(): void {}

  public ngAfterViewInit() : void {
    this.totalStepsCount = this.myStepper.steps.length;
  }

  public goBack(stepper: MatStepper) : void {
    stepper.previous();
  }
  public  goForward(stepper: MatStepper) : void {
    stepper.selectedIndex += 1;
  }
}
