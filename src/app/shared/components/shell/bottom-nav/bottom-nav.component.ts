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
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bottom-nav.component.html',
})
export class BottomNavComponent {
  readonly items: NavItem[] = [
    { icon: storefrontOutline, label: 'Feed', route: '/feed' },
    { icon: addCircleOutline, label: 'Criar', route: '/feed', disabled: true },
    { icon: chatbubblesOutline, label: 'Negociações', route: '/feed', disabled: true },
    { icon: personOutline, label: 'Perfil', route: '/feed', disabled: true },
  ];
}
