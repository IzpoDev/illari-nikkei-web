import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  description: string;
  price: string;
  imgUrl: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  isNavVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show nav when scrolled past half of the viewport height (~50vh)
    this.isNavVisible = window.scrollY > window.innerHeight * 0.5;
  }

  menuItems: MenuItem[] = [
    {
      title: 'Samurai Maki',
      description: 'Langostino furai, palta y atún.',
      price: 'S/. 35',
      imgUrl: 'assets/bg-illari-nikkei.png'
    },
    {
      title: 'Poke Nikkei',
      description: 'Salmón, palta, edamame y salsa acevichada.',
      price: 'S/. 32',
      imgUrl: 'assets/bg-illari-nikkei.png'
    }
  ];
}
