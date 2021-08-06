import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Directive, AfterViewInit } from '@angular/core';
import { PageDirective } from '../../page.directive';
import { StepPage } from '../step-page';

@Component({
  selector: 'app-step-page-wrapper',
  template: '<ng-template pageDirective></ng-template>',
})
export class StepPageWrapperComponent implements AfterViewInit {
  @Input() item?: any;
  showStep: boolean;
  @ViewChild(PageDirective) pageHost: PageDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    if (this.item == undefined) {
      console.error('Item undefined');
      return 
    }
    this.resolveComponenetInputItem();
  }

  
  resolveComponenetInputItem() {
      const viewContainerRef = this.pageHost.viewContainerRef;
      viewContainerRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      // We should find an alternative to be able to show/hide
      // a step based on control panel config. This should be
      // dictated from the service itself or within the component
      // based on config.
      this.showStep = componentRef.instance['showStep'];
  }
}
