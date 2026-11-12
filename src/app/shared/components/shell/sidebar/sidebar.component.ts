import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addCircleOutline, chatbubblesOutline, personOutline, storefrontOutline } from 'ionicons/icons';
import { IconComponent } from '../../icon/icon.component';

interface NavItem {
  icon: string;
  label: string;
  route: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly items: NavItem[] = [
    { icon: storefrontOutline, label: 'Feed', route: '/feed' },
    { icon: addCircleOutline, label: 'Criar anúncio', route: '/feed', disabled: true },
    { icon: chatbubblesOutline, label: 'Negociações', route: '/feed', disabled: true },
    { icon: personOutline, label: 'Perfil', route: '/feed', disabled: true },
  ];
}
