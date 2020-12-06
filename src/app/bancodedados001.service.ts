import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Bancodedados001Service {
 public produtos = [
  {
    codigo: 1,
    nome: 'hamburguer Artesanal',
    ingredientes: 'hamburguer,pão,alface,queijo,tomate',
    imagem: 'assets/coca.jpg',
    quantidade: 0,
    preco: 10,
    subtotal: 0
  
  },
  {
    codigo: 1,
    nome: 'x-salada',
    ingredientes: 'hamburguer,alface,tomate',
    imagem: 'assets/fanta.jpg',
    quantidade: 0,
    preco: 10,
    subtotal: 0
  
  },
  {
    codigo: 3,
    nome: 'x-bacon',
    ingredientes: 'hamburguer,bacon',
    imagem: 'assets/guarana.jpg',
    quantidade: 0,
    preco: 10,
    subtotal: 0
  
  }
];

public carrinho: Array<number> = [];

  constructor() { }

  incluir(cod: number) {
    let existe = false;
    for (let i = 0; i < this.carrinho.length; i++){
      if(this.carrinho[i] === cod){
      alert('Produto já cadastrado!!!');
      existe = true;
      break;
     }
    }
    if (existe === false) {
      this.carrinho.push(cod);

    }
  }
  excluir(cod: number) {
    this.produtos[cod -1].quantidade = 0;
    this.produtos[cod -1].subtotal = 0;
    this.carrinho.splice(cod - 1, 1);
  }
}
