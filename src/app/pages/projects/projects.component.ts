import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

interface ICard {
  img: string;
  link: string;
  comingSoon: boolean;
  title: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit, OnChanges {
  @Input() isSmallScreen = false;

  public cards: ICard[] = [
    {
      img: 'assets/imgs/pokedex.png',
      link: 'https://gustavo-r-oliveira.github.io/pokedex/',
      comingSoon: false,
      title: 'Pokedex',
      description: `Uma simples pokedex utlizando Angular-v15 e hammerjs 
      para seu desenvolvimento e consumindo a API da PokéAPI
      onde se pode ter as informações básicas de todos
      os pokemons.`,
    },
    {
      img: 'assets/imgs/rxeasycache.png',
      link: 'https://github.com/Gustavo-R-Oliveira/rx-easy-cache',
      comingSoon: false,
      title: 'RxEasycache',
      description: `Inspirado em partes do NgRx e utilizando 
      somente RxJs, o RxEasyCache foi criado para fornecer um
      cache menos burocrático e mais automatizado para o desenvolvedor 
      utilizar em suas aplicações.`,
    },
  ];

  selectedIndex = 1;

  ngAfterViewInit(): void {
    if (this.detectTouchDevice()) {
      this.isSmallScreen = true;
      return;
    }

    if (this.isSmallScreen === false) {
      setTimeout(() => {
        const cards = document.querySelectorAll('.vanillaTilt') as any;
        VanillaTilt.init(cards);
      }, 1);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.detectTouchDevice()) {
      this.isSmallScreen = true;
      return;
    }

    if (changes['isSmallScreen'].firstChange) return;

    if (this.isSmallScreen) {
      const cards = document.querySelectorAll('.vanillaTilt') as any;
      cards.forEach((card: any) => {
        card.vanillaTilt.destroy();
      });
    } else {
      const cards = document.querySelectorAll('.vanillaTilt') as any;
      VanillaTilt.init(cards);
    }
  }

  detectTouchDevice(): boolean {
    if ('ontouchstart' in window) return true;

    return false;
  }

  showPrev(index: number): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex = index - 1;
    }
  }

  showNext(index: number): void {
    if (this.selectedIndex < this.cards.length - 1) {
      this.selectedIndex = index + 1;
    }
  }
}
