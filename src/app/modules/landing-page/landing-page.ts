import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MenuCategoryItem {
  title: string;
  description: string;
  price: string;
}

interface MenuCategory {
  categoryName: string;
  imgUrl: string;
  items: MenuCategoryItem[];
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
  isAboutVisible = false;
  isChefVisible = false;

  constructor(private router: Router) {}

  goToMenu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/menu']);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Duración en milisegundos (1.2 segundos para ser muy suave)
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // Función de easing (Ease-in-out Cubic) para un arranque/parada suaves
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show nav when scrolled past half of the viewport height (~50vh)
    this.isNavVisible = window.scrollY > window.innerHeight * 0.5;

    // Trigger about section animation when it comes into view
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        this.isAboutVisible = true;
      } else {
        this.isAboutVisible = false;
      }
    }

    // Trigger chef section animation when it comes into view
    const chefSection = document.getElementById('chef');
    if (chefSection) {
      const rect = chefSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        this.isChefVisible = true;
      } else {
        this.isChefVisible = false;
      }
    }
  }

  menuCategories: MenuCategory[] = [
    {
      categoryName: 'Makis',
      // <-- CAMBIAR IMAGEN DE MAKIS AQUÍ -->
      imgUrl: 'assets/bg-illari-nikkei.png', 
      items: [
        {
          title: 'Acevichado Nikkei',
          description: 'LANGOSTINO, PALTA, SALSA ACEVICHADA, TOGARASHI.',
          price: 'S/ 42'
        },
        {
          title: 'Truffle Maki',
          description: 'ATÚN, ACEITE DE TRUFA BLANCA, SAL DE MAR.',
          price: 'S/ 48'
        }
      ]
    },
    {
      categoryName: 'Bowls',
      // <-- CAMBIAR IMAGEN DE BOWLS AQUÍ -->
      imgUrl: 'assets/bg-illari-nikkei.png', 
      items: [
        {
          title: 'Illari Poke',
          description: 'BASE DE QUINOA, SALMÓN, MANGO, EDAMAME.',
          price: 'S/ 38'
        },
        {
          title: 'Beef Donburi',
          description: 'LOMO FINO, CEBOLLA ROJA, SALSA SHOYU-PANCA.',
          price: 'S/ 45'
        }
      ]
    },
    {
      categoryName: 'Nigiris',
      // <-- CAMBIAR IMAGEN DE NIGIRIS AQUÍ -->
      imgUrl: 'assets/bg-illari-nikkei.png', 
      items: [
        {
          title: 'Hotate Nikkei',
          description: 'CONCHAS DE ABANICO, MANTEQUILLA DE LIMÓN, AJÍ LIMO.',
          price: 'S/ 24'
        },
        {
          title: 'Shake Aburi',
          description: 'SALMÓN FLAMBEADO, SALSA TERIYAKI, RALLADURA DE YUZU.',
          price: 'S/ 22'
        }
      ]
    }
  ];
}
