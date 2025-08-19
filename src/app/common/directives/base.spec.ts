import { ControlContainer } from '@angular/forms';
import { BaseInputComponent } from './base';

describe('BaseInputComponent', () => {
  it('should create an instance', () => {
    const controlContainer = jasmine.createSpyObj('ControlContainer', ['get']); // Create a spy object for ControlContainer
    const directive = new BaseInputComponent(controlContainer); // Pass it to the constructor
    expect(directive).toBeTruthy();
  });
});
