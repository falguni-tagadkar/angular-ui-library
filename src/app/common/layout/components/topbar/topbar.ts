import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  imports: [NgClass,ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {
    layoutService = inject(LayoutService);
    configSidebarVisible = this.layoutService.layoutState().configSidebarVisible;
    toggleDarkMode()
    {
      this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
