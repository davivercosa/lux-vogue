import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}

  products: any[] = [
    {
      stock: 'Instock',
      src: 'https://down-br.img.susercontent.com/file/4ced5635a4ec98b3e5240df159339aa5',
      alt: 'teste',
      title: 'XRay Jr Dark',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
      modi illo in et? Ea alias molestias atque optio nesciunt, velit
      nostrum esse repellat perspiciatis magnam animi deserunt! Velit,
      ab doloremque.`,
    },
    {
      stock: 'Instock',
      src: 'https://planetarelogios.com/cdn/shop/products/product-image-931900564_2000x.jpg?v=1571709821',
      alt: 'teste',
      title: 'XRay Jr Dark',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
      modi illo in et? Ea alias molestias atque optio nesciunt, velit
      nostrum esse repellat perspiciatis magnam animi deserunt! Velit,
      ab doloremque.`,
    },
    {
      stock: 'Out of stock',
      src: 'https://m.media-amazon.com/images/I/612eLazhCjL._AC_SX679_.jpg',
      alt: 'teste',
      title: 'XRay Jr Dark',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
      modi illo in et? Ea alias molestias atque optio nesciunt, velit
      nostrum esse repellat perspiciatis magnam animi deserunt! Velit,
      ab doloremque.`,
    },
  ];

  responsiveOptions: any = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  items: MegaMenuItem[] = [
    {
      label: 'Principais',
      icon: 'pi pi-fw pi-tag',
      items: [
        [
          {
            label: 'Feminino',
            items: [
              { label: 'Vestidos' },
              { label: 'Blusas e Camisetas' },
              { label: 'Saias e Shorts' },
              { label: 'Calças e Jeans' },
              { label: 'Casacos e Jaquetas' },
              { label: 'Roupas de Banho' },
            ],
          },
        ],
        [
          {
            label: 'Masculino',
            items: [
              { label: 'Camisas e Camisetas' },
              { label: 'Calças e Jeans' },
              { label: 'Bermudas e Shorts' },
              { label: 'Blazers e Casacos' },
              { label: 'Roupas Íntimas' },
              { label: 'Roupas de Banho' },
            ],
          },
        ],
        [
          {
            label: 'Acessórios',
            items: [
              { label: 'Bolsas e Clutches' },
              { label: 'Cintos' },
              { label: 'Chapéus e Bonés' },
              { label: 'Joias e Bijuterias' },
              { label: 'Lenços e Echarpes' },
              { label: 'Óculos de Sol' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Especial',
      icon: 'pi pi-fw pi-star',
      items: [
        [
          {
            label: 'Esportivas',
            items: [
              { label: 'Camisetas Esportivas' },
              { label: 'Leggings e Calças Esportivas' },
              { label: 'Tops Esportivos' },
              { label: 'Jaquetas Esportivas' },
              { label: 'Tênis e Calçados Esportivos' },
            ],
          },
        ],
        [
          {
            label: 'Formais',
            items: [
              { label: 'Vestidos de Festa' },
              { label: 'Ternos e Gravatas' },
              { label: 'Vestidos de Cocktail' },
              { label: 'Camisas Sociais' },
              { label: 'Saias e Calças Formais' },
            ],
          },
        ],
        [
          {
            label: 'Inverno',
            items: [
              { label: 'Casacos de Inverno' },
              { label: 'Suéteres e Cardigãs' },
              { label: 'Botas e Sapatos de Inverno' },
              { label: 'Luvas e Cachecóis' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Tendências',
      icon: 'pi pi-fw pi-eye',
      items: [
        [
          {
            label: 'Coleções Temporárias',
            items: [
              { label: 'Outono/Inverno' },
              { label: 'Primavera/Verão' },
              { label: 'Coleções Cápsula' },
            ],
          },
        ],
        [
          {
            label: 'Estilos de Moda',
            items: [
              { label: 'Casual Chic' },
              { label: 'Boho' },
              { label: 'Vintage' },
              { label: 'Minimalista' },
              { label: 'Esportivo Elegante' },
            ],
          },
        ],
        [
          {
            label: 'Colaborações Exclusivas',
            items: [
              { label: 'Parcerias com Designers' },
              { label: 'Edições Limitadas' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Moda Praia',
      icon: 'pi pi-fw pi-sun',
      items: [
        [
          {
            label: 'Biquínis e Maiôs',
            items: [
              { label: 'Biquínis' },
              { label: 'Maiôs' },
              { label: 'Conjuntos de Praia' },
            ],
          },
        ],
        [
          {
            label: 'Sungas',
            items: [
              { label: 'Clássicas' },
              { label: 'Estampadas' },
              { label: 'De Praia' },
            ],
          },
        ],
        [
          {
            label: 'Acessórios',
            items: [
              { label: 'Chapéu' },
              { label: 'Chinelos' },
              { label: 'Bolsas' },
            ],
          },
        ],
      ],
    },
  ];

  brands = [
    {
      nome: 'teste1',
      src: 'lacoste_logo.png',
    },
    {
      nome: 'teste2',
      src: 'prada_logo.png',
    },
    {
      nome: 'teste3',
      src: 'versace_logo.png',
    },
    {
      nome: 'teste4',
      src: 'armani_logo.png',
    },
    {
      nome: 'teste5',
      src: 'chanel_logo.png',
    },
    {
      nome: 'teste6',
      src: 'fendi_logo.png',
    },
    {
      nome: 'teste7',
      src: 'dolce_gabana_logo.png',
    },
    {
      nome: 'teste8',
      src: 'calvin_klein_logo.png',
    },
  ];

  currentIndex = 0;
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.brands.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.brands.length) % this.brands.length;
  }
}
