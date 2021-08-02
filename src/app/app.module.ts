import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VenteCommandePanierComponent } from './vente-commande-panier/vente-commande-panier.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierMoyenComponent } from './panier-moyen/panier-moyen.component';
import { ClientsComponent } from './clients/clients.component';
import { PourcentageComponent } from './pourcentage/pourcentage.component';
import { ProduitPhareComponent } from './produit-phare/produit-phare.component';
import { VenteComponent } from './vente/vente.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { RecurenceComponent } from './recurence/recurence.component';
import { ProduitsPharesComponent } from './produits-phares/produits-phares.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    VenteCommandePanierComponent,
    NotFoundComponent,
    PanierMoyenComponent,
    ClientsComponent,
    PourcentageComponent,
    ProduitPhareComponent,
    VenteComponent,
    CommandeComponent,
    PanierComponent,
    ClientComponent,
    RecurenceComponent,
    ProduitsPharesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
