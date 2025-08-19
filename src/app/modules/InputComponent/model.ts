import { BaseConfig } from "../../common/models/model";

export enum InputComponentType
{
    Text = 'text',
    Email = 'email',
    Number = 'number',
    Password = 'password',
}

export interface InputConfig extends BaseConfig 
{
    type?: InputComponentType;
    //for input with icons
    prefixIcon?: string;
    suffixIcon?: string;

    //for floating label
    // floatingLabel?: boolean;
    // labelvariant?: string;//on, in 

    change?: (event?: any) => void;
    keyup?: (event?: any) => void;
    keypress?: (event?: any) => void;
    keyDown?: (event: KeyboardEvent) => boolean;
    blur?: (event?: any) => void;
    focusout?: (event?: any) => void;
    click?: (event?: MouseEvent) => void;
    onEnter?: (event?: any) => void;
    tooltipText?: (data: any) => string;
    bgClassCallback?: () => string;
}