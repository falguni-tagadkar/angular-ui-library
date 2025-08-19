import { Component } from '@angular/core';
import { InputConfig } from '../model';
import { BaseInputComponent } from '../../../common/directives/base';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputComponentType } from '../model';
import { Password } from 'primeng/password';

@Component({
  selector: 'input-component',
  imports: [ReactiveFormsModule,InputTextModule,FloatLabelModule,IconField,InputIcon,Password],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css'
})
export class InputComponent extends BaseInputComponent<InputConfig> {
    inputComponentType = InputComponentType;
}
