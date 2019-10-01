import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {

  idPizza;
  nomePizza;
  descricaoPizza;
  precoPizza;
  divisor = 1;
  precoPizzaFixo;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.idPizza = this.activatedRoute.snapshot.params.id
    let pizzaString = localStorage.getItem(this.idPizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    this.nomePizza = pizzaObjeto.nomePizza
    this.descricaoPizza = pizzaObjeto.descricaoPizza
    this.precoPizza = pizzaObjeto.precoPizza
    this.precoPizzaFixo = this.precoPizza

  }

  incrementar() {
    this.divisor++
    this.atualizarPreco()
  }

  decrementar() {
    if (this.divisor > 1) {
      this.divisor--
      this.atualizarPreco()
    }
  }

  atualizarPreco() {
    this.precoPizza = (parseFloat(this.precoPizzaFixo)
      / this.divisor).toFixed(2)
  }

  atualizarComRange(){
    this.atualizarPreco()
  }


}