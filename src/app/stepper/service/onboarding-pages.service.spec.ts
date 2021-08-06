import { TestBed } from '@angular/core/testing';

import { OnboardingPagesService } from './onboarding-pages.service';

describe('StepPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnboardingPagesService = TestBed.get(OnboardingPagesService);
    expect(service).toBeTruthy();
  });
});
