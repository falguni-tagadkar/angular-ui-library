import { BaseConfig, SelectOption } from "../../common/models/model";

export interface SelectConfig extends BaseConfig
{
    options : SelectOption[];
    isMultiSelect: boolean ; 
    isSearchable: boolean; 
} 