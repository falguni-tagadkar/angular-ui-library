import { FormGroup } from "@angular/forms";

export interface BaseConfig 
{
    id?: string;
    label?: string;
    placeholder?: string;
    formControlName: string;
    formGroup:FormGroup;
    required?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    class?: string;
    size?: string;
    customValidationMessage?: (errorType: string) => string;
}

export interface SelectOption
{
    key : string | number;
    value : string;
}