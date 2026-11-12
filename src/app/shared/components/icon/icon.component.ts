import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const DATA_URI_PREFIX = 'data:image/svg+xml;utf8,';

/**
 * Renderiza um ícone do pacote `ionicons/icons` como SVG inline, em vez de
 * usar o web component <ion-icon>. O web component (Stencil) tem uma
 * condição de corrida conhecida ao hidratar instâncias dentro de rotas
 * lazy-loaded, deixando o SVG em branco de forma intermitente — o SVG
 * inline evita esse problema por completo e é mais leve.
 *
 * ViewEncapsulation.None é necessário aqui: o SVG chega via [innerHTML],
 * fora do template compilado pelo Angular, então o CSS com encapsulamento
 * padrão (que depende de atributos _ngcontent) nunca alcançaria esses nós.
 * As regras abaixo reproduzem o estilo que o Ionicons normalmente injeta
 * globalmente para as classes dos próprios paths (fill-none/stroke-width).
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<span class="app-icon" [innerHTML]="safeSvg"></span>`,
  styles: [
    `
      .app-icon {
        display: inline-flex;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
      }

      .app-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .app-icon svg.ionicon {
        fill: currentColor;
      }

      .app-icon .ionicon-fill-none {
        fill: none;
      }

      .app-icon .ionicon-stroke-width {
        stroke: currentColor;
        stroke-width: 32px;
      }
    `,
  ],
})
export class IconComponent {
  // Confiável por construção: só recebe constantes estáticas de
  // ionicons/icons definidas pelo próprio código-fonte, nunca texto do usuário.
  // Essas constantes vêm como data URI (prefixo acima) em vez de markup SVG
  // puro — extraímos o SVG real antes de injetar.
  @Input({ required: true }) set icon(value: string) {
    const rawSvg = value.startsWith(DATA_URI_PREFIX) ? value.slice(DATA_URI_PREFIX.length) : value;
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }

  safeSvg: SafeHtml = '';

  constructor(private readonly sanitizer: DomSanitizer) {}
}
