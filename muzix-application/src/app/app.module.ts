// import { Observable } from 'rxjs/Rx';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatGridListModule} from '@angular/material/grid-list';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { Card2Component } from './card2/card2.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    CardComponent,
    WishlistComponent,
    Card2Component,
    UpdateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'card', component: CardComponent },
      {path: 'card2', component: Card2Component},
      {path: 'search', component: SearchComponent},
      {path: 'wishlist', component: WishlistComponent}
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
