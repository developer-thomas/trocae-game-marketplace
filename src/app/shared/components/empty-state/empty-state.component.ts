import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { storefrontOutline } from 'ionicons/icons';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empty-state.component.html',
})
export class EmptyStateComponent {
  // Ícones são passados como a constante SVG importada (não por nome), para
  // não depender do registro global do ion-icon entre chunks lazy-loaded.
  @Input() icon: string = storefrontOutline;
  @Input() title = '';
  @Input() description = '';
}
