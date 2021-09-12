import { Injectable } from '@angular/core'; 
import { Produit } from 'src/app/model/produit.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

const httpOptions = { 
  headers: new HttpHeaders( 
    {'Content-Type': 'application/json'} 
    )
  };
@Injectable(
  {providedIn: 'root'}
)


export class ProduitService {
  apiURL: string = 'http://localhost:80/backend_st/config';
   produits: Produit[] = []; 
  produit!: Produit;
  
   //un tableau de Produit 
   constructor(private http : HttpClient) {}
    listeProduits(): Observable<Produit[]>{ 
      return this.http.get<Produit[]>(this.apiURL);
    }
     
   
    
    ajouterProduit( prod: Produit):Observable<Produit>{
       return this.http.post<Produit>(this.apiURL, prod, httpOptions);
       }


    supprimerProduit( prod: Produit){ //supprimer le produit prod du tableau produits
       const index = this.produits.indexOf(prod, 0); if (index > -1) { 
         this.produits.splice(index, 1); } //ou Bien 
         /* this.produits.forEach((cur, index) => {
            if(prod.idProduit === cur.idProduit) {
               this.produits.splice(index, 1); }
               }); */ 
        }
    
    trierProduits(){ 
      this.produits = this.produits.sort((n1,n2) => { 
        if (n1.idProduit > n2.idProduit) { 
          return 1; 
        } 
          if (n1.idProduit < n2.idProduit) {
             return -1; 
            } 
            return 0;
           }); 
          } 
    
          consulterProduit(id: number): Observable<Produit> { 
            const url = `${this.apiURL}/${id}`; 
            return this.http.get<Produit>(url); 
          }
          updateProduit(prod :Produit) : Observable<Produit> { 
            return this.http.put<Produit>(this.apiURL, prod, httpOptions);
           }

     
}