import { BaseConfig } from "../../common/models/model";

export interface DatepickerConfig extends BaseConfig
{
    dateFormat : 'dd/mm/yy'| 'mm/dd/yy'| 'yy-mm-dd' | 'dd M yy'
    minDate?: Date;
    maxDate?: Date;
    selectionMode?: 'single' | 'multiple' | 'range';
} 