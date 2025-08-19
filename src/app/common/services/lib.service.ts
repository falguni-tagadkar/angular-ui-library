import { Injectable } from "@angular/core";
import { InputComponentType, InputConfig } from "../../modules/InputComponent/model";
import { FormGroup } from "@angular/forms";
import { SelectOption } from "../models/model";
import { SelectConfig } from "../../modules/SelectComponent/model";

@Injectable({
    providedIn: 'root'
})
export class LibService
{
    getInputConfig(label:string, formControlName : string, formGroup: FormGroup,type? : InputComponentType, required?: boolean,customValidationMessage? : any, placeholder? : string, prefixIcon?: string, suffixIcon?: string) : InputConfig
    {
        return {
            label: label,
            formControlName: formControlName,
            formGroup: formGroup,
            type: type ? type : InputComponentType.Text,
            required : required ? required : false,
            placeholder: placeholder ? placeholder : '',
            prefixIcon: prefixIcon,
            suffixIcon: suffixIcon,
            customValidationMessage: customValidationMessage ? customValidationMessage : undefined,
        }
    }

    getSelectConfig(label: string, formControlName : string, formGroup: FormGroup,options: SelectOption[],required: boolean = false, isMultiSelect: boolean = false, isSearchable: boolean = false, customValidationMessage? : any, placeholder? : string): SelectConfig
    {
        return {
            label: label,
            formControlName: formControlName,
            formGroup: formGroup,
            options: options,
            isMultiSelect: isMultiSelect,
            isSearchable: isSearchable,
            customValidationMessage: customValidationMessage ? customValidationMessage : undefined,
            placeholder: placeholder ? placeholder : '',
        };
    }

}