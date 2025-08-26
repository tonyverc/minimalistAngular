import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  sections = [
    {
      title : 'SEO OPTIMIZED',
      description: 'Accus antium et dolor emque veri tatis archi tecto, eaque ipsa quae ab illo inven tore veri tatis per spiciatis. Sed ut iste natus volupt atem frin gilla tempor dignis sim at.'
    },
    {
      title: 'EASY TO USE',
      description:'Accus antium et dolor emque veri tatis archi tecto, eaque ipsa quae ab illo inven tore veri tatis pers piciatis. Sed ut iste natus volupt atem frin gilla tempor dignis sim at.'
    },
    {
      title : 'RESPONSIVE',
      description : 'Accus antium et dolor emque veri tatis archi tecto, eaque ipsa quae ab illo inven tore veri tatis pers piciatis. Sed ut iste natus volupt atem frin gilla tempor dignis sim at.'
    },
  ]
}
