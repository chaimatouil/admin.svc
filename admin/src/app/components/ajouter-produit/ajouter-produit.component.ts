import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})

export class AjouterProduitComponent implements OnInit {
  newProduit = new Produit();
  router!: Router;

  constructor(private produitService: ProduitService) { }
  
  addProduit(){
     this.produitService.ajouterProduit(this.newProduit) .subscribe(
       prod => { 
         console.log(prod); 
        }
        ); 
         this.router.navigate(['produits']); 
        }

  ngOnInit(): void {

    }


    
}
