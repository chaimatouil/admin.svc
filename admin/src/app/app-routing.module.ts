import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './components/ajouter-produit/ajouter-produit.component';
import { SupprimerProduitComponent } from './components/supprimer-produit/supprimer-produit.component';
import { ModifierProduitComponent } from './components/modifier-produit/modifier-produit.component';

const routes: Routes = [
  {path: "supprimer-produit", component : SupprimerProduitComponent},
  {path: "ajouter-produit", component : AjouterProduitComponent},
  {path: "modifier-produit/:id", component: ModifierProduitComponent},
    {path: "", redirectTo: "supprimer-produit", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
