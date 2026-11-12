import { Injectable, signal } from '@angular/core';

export interface GameServerContext {
  gameName: string;
  serverName: string;
}

/**
 * Jogo + servidor ativo. Hoje não há módulo de Games/Servers implementado
 * ainda, então o contexto fica honestamente "não carregado" até existir essa
 * funcionalidade — o seletor do header reflete esse estado, não inventa dados.
 */
@Injectable({ providedIn: 'root' })
export class GameServerContextService {
  private readonly contextSignal = signal<GameServerContext | null>(null);

  readonly context = this.contextSignal.asReadonly();

  isLoaded(): boolean {
    return this.contextSignal() !== null;
  }
}
