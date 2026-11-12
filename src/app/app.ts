import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/shell/header/header.component';
import { SidebarComponent } from './shared/components/shell/sidebar/sidebar.component';
import { BottomNavComponent } from './shared/components/shell/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, BottomNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
