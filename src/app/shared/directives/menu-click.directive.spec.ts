import { MenuClickDirective } from './menu-click.directive';
import { ElementRef } from '@angular/core';
import {inject} from '@angular/core/testing';
describe('MenuClickDirective', () => {
  let _elRef;
  
  beforeEach(inject([ElementRef], function (el: ElementRef) {
    _elRef = el;
  }));

  it('should create an instance', () => {
    const directive = new MenuClickDirective(_elRef);
    expect(directive).toBeTruthy();
  });
});
