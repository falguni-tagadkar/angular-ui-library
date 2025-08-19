import { Directive, Input } from '@angular/core';
import { BaseConfig } from '../models/model';
import { ControlContainer, FormControl } from '@angular/forms';
import { ERROR_TYPES, INVALID } from '../constants/constant';

//we use directive when the class just has logic and no template
@Directive({
  selector: '[appBaseInputComponent]'
})
export class BaseInputComponent<TConfig extends BaseConfig> {
  @Input() config!: TConfig;

  constructor(private controlContainer: ControlContainer) {}

  get control() {
    return this.controlContainer.control?.get(this.config.formControlName) as FormControl;
  }

  get hasError(): boolean {
    return !!this.control && this.control.invalid && (this.control.dirty || this.control.touched);
    //not directly control.errors because checks first user has touched the control or not
  }

  get errorMessage()
  {
    if(!this.hasError) {
      return '';
    }

    const errorType = this.control?.errors ? Object.keys(this.control.errors)[0] : '';

    if (!errorType) return '';

    if(this.config.customValidationMessage) {
      return this.config.customValidationMessage(errorType);
    }

    const messages: Record<string, string> = {
      [ERROR_TYPES.required]: INVALID.required,
      [ERROR_TYPES.email]: INVALID.email,
    };

    if (errorType === ERROR_TYPES.minlength) {
      return INVALID.minlength(this.control?.errors?.[errorType]?.requiredLength);
    }
    if (errorType === ERROR_TYPES.maxlength) {
      return INVALID.maxlength(this.control?.errors?.[errorType]?.requiredLength);
    }

    return messages[errorType] || 'Invalid input';
  }

}
