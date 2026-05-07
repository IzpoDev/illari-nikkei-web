import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  
  // Aquí puedes agregar todo el contenido que viene en el PDF
  fullMenu = [
    {
      name: 'Makis',
      items: [
        { title: 'Acevichado', description: 'Palta, langostino, láminas de katsu y salsa acevichada.', price: 'S/ 18.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Spicy Miel', description: 'Queso orema, langostino, láminas de salmón y salsa spicy miel.', price: 'S/ 20.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Tsurai', description: 'Palta y pollo tope de queso orema y salsa tsurai de maracuyá.', price: 'S/ 22.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Niku', description: 'Carne tempura, papa tope de carne y mayonesa de anchoas y alcaparras.', price: 'S/ 25.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Batayaky', description: 'Maki tempura relleno de palta y langostino crema batayaky de anchoas y piel de salmón.', price: 'S/ 25.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Amanecer', description: 'Maki furai relleno de kairy envuelto palta y langostino acompañado con tartar de bonito y sal de tiradito.', price: 'S/ 30.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Tataki', description: 'Temaki de atún, ajos, cebolla crocante, palta y cebollín.', price: 'S/ 20.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Spicy Cheese', description: 'Maki furai de queso, pollo y crema de queso picante.', price: 'S/ 20.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Furai', description: 'Palta, salmón y queso orema.', price: 'S/ 20.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Olivo', description: 'Palta, langostino envuelto en tenkatsu y salsa olivo.', price: 'S/ 18.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'California', description: 'Langostino furai, queso orema y palta envuelto en quinoa perlada.', price: 'S/ 18.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Brasa', description: 'Palta, lechuga, ikuray y tomate tope de langostino y salsa anticuchera.', price: 'S/ 25.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Kani', description: 'Maki kairi relleno de langostino y queso orema, crema de cangrejo y huacatay.', price: 'S/ 30.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Tochi', description: 'Palta, langostino y lechuga, leche tiger verde y nori crocante.', price: 'S/ 30.00', imgUrl: 'assets/bg-illari-nikkei.png' },
      ]
    },
    {
      name: 'Bowls',
      items: [
        { title: 'Poke Acevichado', description: 'Arroz shari, palta, langostino, ikury y salsa acevichada.', price: 'S/ 22.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Poke Kani', description: 'Palta, langostino furai y crema de cangrejo sobre arroz shari.', price: 'S/ 25.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Poke Rocoto', description: 'Ceviche de pato, palta y yuyo tempura sobre arroz shari.', price: 'S/ 25.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Poke Tataki', description: 'Katsuo flameado sobre arroz shari, cebolla crocante y palta.', price: 'S/ 22.00', imgUrl: 'assets/bg-illari-nikkei.png' },
      ]
    },
    {
      name: 'Nigiris',
      items: [
        { title: 'Sake Bata', description: 'Salmón gratinado en salsa batayaky (4 und).', price: 'S/ 12.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Katsuo', description: 'Katsuo curado en cítricos, salsa ponzu y cebollín (4 und).', price: 'S/ 12.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Tako', description: 'Pulpo, shari y láminas de palta y ohmioburi nikkei (4 und).', price: 'S/ 18.00', imgUrl: 'assets/bg-illari-nikkei.png' },
        { title: 'Parrillero', description: 'Pescado del día y panchiky de verduras (4 und).', price: 'S/ 12.00', imgUrl: 'assets/bg-illari-nikkei.png' },
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/']);
  }
}
