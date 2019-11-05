import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.page.html',
  styleUrls: ['./finalizar-compra.page.scss'],
})
export class FinalizarCompraPage implements OnInit {

  cep:string
  rua:string
  cidade:string
  estado:string
  bairro:string

  constructor() { }

  ngOnInit() {
  }

  async buscarEndereco(){
    console.log(this.cep)
    fetch("https://viacep.com.br/ws/" + this.cep + "/json").then(dados => {
      dados.json().then(endereco => {
        this.bairro = endereco.bairro
        this.cidade = endereco.localidade
        this.estado = endereco.uf
        this.rua = endereco.logradouro
      })
    })
  }


}
