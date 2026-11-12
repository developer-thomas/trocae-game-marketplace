import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { heartOutline, notificationsOutline, personOutline, searchOutline } from 'ionicons/icons';
import { GameServerSelectorComponent } from '../../game-server-selector/game-server-selector.component';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, IconComponent, GameServerSelectorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly searchIcon = searchOutline;
  readonly heartIcon = heartOutline;
  readonly notificationsIcon = notificationsOutline;
  readonly personIcon = personOutline;
}
