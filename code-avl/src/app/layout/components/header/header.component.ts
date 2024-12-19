import { Component, OnInit, inject } from '@angular/core';

import { ThemeManagerService } from '../../../core/services/theme-manager.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private readonly themeManagerService = inject(ThemeManagerService);

  ngOnInit(): void {
    this.themeManagerService.setInitialTheme();
  }

  toggleTheme() {
    this.themeManagerService.toggleTheme();
  }
}
