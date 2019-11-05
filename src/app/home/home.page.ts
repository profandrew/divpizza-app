import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(private menu:ActionSheetController, private route:Router){}

  catalogo:Array<Object> = []
  imagensPizzas:Array<any> = [{
    chave: "mussarela",
    imagem: "../assets/queijo.jpg"
  }, {
    chave: "portuguesa",
    imagem: "../assets/portuguesa.jpg"
  }] 

  ionViewDidEnter() {
    console.log("EXECUTOU O VIEW DID ENTER")
    this.listarCatalogo()
   
  }

  listarCatalogo() {
    this.catalogo = []
    const tamanhoDoBanco = localStorage.length
    for(let i = 0; i < tamanhoDoBanco; i++) {
      const chaveAtual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveAtual)
      const pizzaObjeto = JSON.parse(pizzaString)
      let objetoDeImagens = this.imagensPizzas.filter((objeto)=>{
        if(objeto.chave === pizzaObjeto.nomePizza.toLowerCase()) {
          return objeto
        }
      })

      if(objetoDeImagens.length === 0){
        //não encontrou nenhuma imagem de pizza no nosso
        //array statico
        objetoDeImagens.push({imagem: '../assets/pizza1.jpg'})
      }
      pizzaObjeto.imagem = objetoDeImagens[0].imagem
      this.catalogo.push(pizzaObjeto)
    }
  }

  async exibirOpcoes(id) {
    console.log("clicou na opção " + id)
    let criacaoMenu = await this.menu.create({
      header: "Opções da pizza nº " + id,
      buttons: [{
        text: "Editar Pizza",
        icon: "create",
        handler: () => {
          this.route.navigate(['edit-pizza', id])
        }
      }, {
        text: "Excluir Pizza",
        icon: "trash",
        handler: () => {
          console.log("clicou em excluir")
          localStorage.removeItem(id)
          this.listarCatalogo() 
        }
      }]
    })

    criacaoMenu.present()
  }

  comprar(id) {
    console.log(id)
    this.route.navigate(['comprar-pizza', id])
  }
}
