import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bancodedados001Service } from './../Bancodedados001.service';

@Component({
  selector: 'app-proddetalhe',
  templateUrl: './proddetalhe.page.html',
  styleUrls: ['./proddetalhe.page.scss'],
})
export class ProddetalhePage implements OnInit {

  produto = {
    codigo: 0,
    nome: '',
    ingredientes: '',
    imagem: '',
    quantidade: 0,
    preco: 0,
    subtotal: 0
  };
  constructor(
    private recebendo: ActivatedRoute,
    private bd: Bancodedados001Service
  ) { }

  ngOnInit() {
    this.recebendo.paramMap.subscribe(p => {
      let i: number = (Number(p.get('codigo')) -1);
      this.produto = {
        codigo: this.bd.produtos[i].codigo,
        nome: this.bd.produtos[i].nome,
        ingredientes: this.bd.produtos[i].ingredientes,
        imagem: this.bd.produtos[i].imagem,
        quantidade: this.bd.produtos[i].quantidade,
        preco: this.bd.produtos[i].preco,
        subtotal: this.bd.produtos[i].subtotal,
      };
    })
  }

}
