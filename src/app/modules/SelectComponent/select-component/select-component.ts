import { Component } from '@angular/core';
import { BaseInputComponent } from '../../../common/directives/base';
import { SelectConfig } from '../model';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelect } from 'primeng/multiselect';

@Component({
  selector: 'select-component',
  imports: [SelectModule, ReactiveFormsModule, MultiSelect],
  templateUrl: './select-component.html',
  styleUrl: './select-component.css'
})
export class SelectComponent extends BaseInputComponent<SelectConfig>{

}
