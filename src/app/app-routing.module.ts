import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsPharesComponent } from './produits-phares/produits-phares.component';
import { RecurenceComponent } from './recurence/recurence.component';
import { VenteComponent } from './vente/vente.component';

const routes: Routes = [
  { path: "", component:DashboardComponent },
  { path: "not-found", component: NotFoundComponent},
  { path: "ventes", component:VenteComponent},
  { path: "commandes", component:CommandeComponent},
  { path: "paniers", component:PanierComponent},
  { path: "clients", component:ClientComponent},
  { path: "recurence", component:RecurenceComponent},
  { path: "produits-phares", component:ProduitsPharesComponent},
  // { path: "", component:},
  { path: "**", redirectTo: "not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
