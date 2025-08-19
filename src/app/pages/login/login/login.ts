import { Component, computed, inject, OnInit } from '@angular/core';
import { LibService } from '../../../common/services/lib.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { INVALID } from '../../../common/constants/constant';
import { SelectOption } from '../../../common/models/model';
import { SelectConfig } from '../../../modules/SelectComponent/model';
import { InputComponentType, InputConfig } from '../../../modules/InputComponent/model';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { InputText } from 'primeng/inputtext';
import { LayoutService } from '../../../common/services/layout.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ButtonModule,Password,Checkbox,InputText],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  layoutService = inject(LayoutService);
  userNameConfig! : InputConfig;
  emailConfig! : InputConfig;
  numberConfig! : InputConfig;
  passwordConfig! : InputConfig;
  foodConfig! : SelectConfig;
  userForm! : FormGroup;
  selectValues : SelectOption[] = [
    { key: '1', value: 'Pizza' },
    { key: '2', value: 'Chinese' },
    { key: '3', value: 'Mocktail' },
    { key: '4', value: 'Nachos' }
  ]
  isDarkTheme = computed(() => this.layoutService.layoutConfig().darkTheme);

  constructor(private libService : LibService) {
  }

  ngOnInit()
  {
    this.initializeForm();
    this.setConfigValues();
  }

  initializeForm()
  {
    this.userForm = new FormGroup({
      username : new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number : new FormControl('', [ Validators.pattern('^[0-9]+$')]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
      food : new FormControl('', [Validators.required])
    });
  }

  setConfigValues()
  {
    this.userNameConfig = this.libService.getInputConfig('Username', 'username', this.userForm, InputComponentType.Text,true,(errorType: string) => {
      switch (errorType) {
        case 'required':
          return INVALID.required;
        case 'minlength':
          return 'Username must be at least 3 characters long';
        default:
          return 'Invalid username';
      }
    },'Enter your username');

    this.emailConfig = this.libService.getInputConfig('Email', 'email', this.userForm, InputComponentType.Email, true,null,'Enter your email', 'search');
    this.numberConfig = this.libService.getInputConfig('Number', 'number', this.userForm, InputComponentType.Number, false);
    this.passwordConfig = this.libService.getInputConfig('Password', 'password', this.userForm, InputComponentType.Password, true);
    this.foodConfig = this.libService.getSelectConfig('Food', 'food', this.userForm, this.selectValues,false, false, false,null, 'Select your favorite food');
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  toggleDarkMode()
  {
    this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }
}
