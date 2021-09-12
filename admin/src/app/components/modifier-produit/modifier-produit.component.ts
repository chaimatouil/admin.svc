import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProduitService } from 'src/app/services/produit.service'; 
import { Produit } from 'src/app/model/produit.model';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styles: [
  ]
})
export class ModifierProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute, private router :Router, private produitService: ProduitService) 
  { }

  ngOnInit(): void {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProduit = prod; });
  }
  updateProduit() {
     this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
        this.router.navigate(['produits']);
       },(error) => {
     alert("Problème lors de la modification !"); } ); }
}