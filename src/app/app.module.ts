// tslint:disable-next-line:quotemark
import { Http, Response } from "@angular/http";

// tslint:disable-next-line:quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line:quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { FormsModule } from "@angular/forms";
// tslint:disable-next-line:quotemark
import { HttpModule } from "@angular/http";

// tslint:disable-next-line:quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line:quotemark
import { ProductPageComponent } from "./product-page/product-page.component";
// tslint:disable-next-line:quotemark
import { ProductDescriptionComponent } from "./product-description/product-description.component";
// tslint:disable-next-line:quotemark
import { constructor } from "assert";
// tslint:disable-next-line:quotemark
import { getLocaleNumberSymbol } from "@angular/common";

// tslint:disable-next-line:quotemark
import "rxjs/add/operator/map";
// tslint:disable-next-line:quotemark
import { ProductTracklistingComponent } from "./product-tracklisting/product-tracklisting.component";
// tslint:disable-next-line:quotemark
import { ProductListComponent } from "./product-list/product-list.component";
// tslint:disable-next-line:quotemark

// tslint:disable-next-line:quotemark
@Injectable()
export class ProductService
{
  // tslint:disable-next-line:quotemark
  private _albumUrl = "...assets/album.json";
  constructor(private _http: Http) { }

  getAlbum(id: number)
  {
    return this._http.get(this._albumUrl).map(
      // tslint:disable-next-line:no-shadowed-variable
      (Response) => Response.json()
    );
  }
}
// tslint:disable-next-line:quotemark
const appRoutes: Routes = [
  // tslint:disable-next-line:quotemark
  { path: "products", component: ProductListComponent },
  // tslint:disable-next-line:quotemark
  { path: "product/:id", component: ProductPageComponent },
  // tslint:disable-next-line:quotemark
  { path: "", redirectTo: "products", pathMatch: "full" },
];

// tslint:disable-next-line:quotemark
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
