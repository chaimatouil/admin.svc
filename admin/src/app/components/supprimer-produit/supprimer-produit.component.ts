import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.module'; 
import { ProduitService } from 'src/app/services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-produit',
  templateUrl: './supprimer-produit.component.html',
  styleUrls: ['./supprimer-produit.component.css']
})
export class SupprimerProduitComponent implements OnInit {
  produits: any;

  

      constructor(private produitService: ProduitService){
        this.produits = produitService.listeProduits();
      }  
 
      supprimerProduit(p: Produit) { //console.log(p)
        this.produitService.supprimerProduit(p); 
      }

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(
      (      prods: Produit[]) => { 
        console.log(prods);
         this.produits = prods;
         });
  }

 
}
