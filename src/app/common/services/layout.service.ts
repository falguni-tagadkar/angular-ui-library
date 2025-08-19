import { Injectable, signal, computed, effect } from '@angular/core';

export interface LayoutConfig {
  darkTheme?: boolean;
  menuMode?: string;
}

export interface LayoutState {
  staticMenuDesktopInactive?: boolean;
  overlayMenuActive?: boolean;
  configSidebarVisible?: boolean;
  staticMenuMobileActive?: boolean;
  menuHoverActive?: boolean;
}

export interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LayoutService {
  // --- Signals ---
  layoutConfig = signal<LayoutConfig>({
    darkTheme: false,
    menuMode: 'static'
  });

  layoutState = signal<LayoutState>({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  });

  // Instead of Subjects, just use signals to hold “last event”
  lastConfigUpdate = signal<LayoutConfig | null>(null);
  lastOverlayOpen = signal<boolean>(false);
  lastMenuChange = signal<MenuChangeEvent | null>(null);
  lastReset = signal<boolean>(false);

  // --- Computed ---
  theme = computed(() => (this.layoutConfig().darkTheme ? 'light' : 'dark'));
  isSidebarActive = computed(() => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive);
  isDarkTheme = computed(() => this.layoutConfig().darkTheme);
  isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

  transitionComplete = signal<boolean>(false);
  private initialized = false;

  constructor() {
    // React to config changes
    effect(() => {
      const config = this.layoutConfig();
      if (config) {
        this.lastConfigUpdate.set(config); // replaces Subject
      }
    });

    // Dark mode transitions
    effect(() => {
      const config = this.layoutConfig();
      if (!this.initialized || !config) {
        this.initialized = true;
        return;
      }
      this.handleDarkModeTransition(config);
    });
  }

  private handleDarkModeTransition(config: LayoutConfig): void {
    if ((document as any).startViewTransition) {
      const transition = (document as any).startViewTransition(() => {
        this.toggleDarkMode(config);
      });

      transition.ready.then(() => this.onTransitionEnd()).catch(() => {});
    } else {
      this.toggleDarkMode(config);
      this.onTransitionEnd();
    }
  }

  toggleDarkMode(config?: LayoutConfig): void {
    const _config = config || this.layoutConfig();
    if (_config.darkTheme) {
      document.documentElement.classList.add('app-dark');
    } else {
      document.documentElement.classList.remove('app-dark');
    }
  }

  private onTransitionEnd() {
    this.transitionComplete.set(true);
    setTimeout(() => this.transitionComplete.set(false));
  }

  onMenuToggle() {
    if (this.isOverlay()) {
      this.layoutState.update(prev => ({ ...prev, overlayMenuActive: !prev.overlayMenuActive }));
      if (this.layoutState().overlayMenuActive) {
        this.lastOverlayOpen.set(true); // replaces Subject
      }
    }

    if (this.isDesktop()) {
      this.layoutState.update(prev => ({ ...prev, staticMenuDesktopInactive: !prev.staticMenuDesktopInactive }));
    } else {
      this.layoutState.update(prev => ({ ...prev, staticMenuMobileActive: !prev.staticMenuMobileActive }));
      if (this.layoutState().staticMenuMobileActive) {
        this.lastOverlayOpen.set(true); // replaces Subject
      }
    }
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.lastMenuChange.set(event);
  }

  reset() {
    this.lastReset.set(true);
  }
}