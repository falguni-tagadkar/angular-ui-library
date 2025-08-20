import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  constructor(public layoutService: LayoutService) {}

  onMenuToggle(): void {
    const isDesktop = this.layoutService.isDesktop();
    if (isDesktop) {
      this.layoutService.layoutState.update((prev) => ({
         ...prev, staticMenuDesktopInactive: !prev.staticMenuDesktopInactive
      }));
    } else {
      this.layoutService.layoutState.update((prev) => ({
        overlayMenuActive: !prev.overlayMenuActive
      }));
    }
  }

  toggleOverlay() {
    this.layoutService.layoutState.update(prev => ({
      ...prev,
      overlayMenuActive: !prev.overlayMenuActive
    }));
  }
}
