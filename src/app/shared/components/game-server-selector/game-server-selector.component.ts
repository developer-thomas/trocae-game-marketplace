import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { chevronDownOutline, storefrontOutline } from 'ionicons/icons';
import { GameServerContextService } from '../../../core/context/game-server-context.service';
import { IconComponent } from '../icon/icon.component';

/**
 * Seletor de jogo + servidor do header. Ainda não existe módulo de
 * Games/Servers, então o estado honesto é "contexto não carregado" — não
 * finge ter Aika Online selecionado por padrão.
 */
@Component({
  selector: 'app-game-server-selector',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game-server-selector.component.html',
})
export class GameServerSelectorComponent {
  private readonly contextService = inject(GameServerContextService);

  readonly context = this.contextService.context;
  readonly storefrontIcon = storefrontOutline;
  readonly chevronDownIcon = chevronDownOutline;
}
