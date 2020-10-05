// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";
// tslint:disable-next-line:quotemark
import { Injectable } from "@angular/core";
// tslint:disable-next-line:quotemark
import { Http } from "@angular/http";
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
// tslint:disable-next-line:quotemark
import { ProductService } from "../product.service";
// tslint:disable-next-line:quotemark
import { Album } from "./album";
// tslint:disable-next-line:quotemark
import "rxjs/add/operator/map";
// tslint:disable-next-line:quotemark
import { Product } from "./product";

@Component({
  // tslint:disable-next-line:quotemark
  selector: "app-product-list",
  // tslint:disable-next-line:quotemark
  templateUrl: "./product-list.component.html",
  // tslint:disable-next-line:quotemark
  styleUrls: ["./product-list.component.css"],
})
@Injectable()
export class ProductListComponent implements OnInit {
  albumInfo;
  products: Product[];

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
    // tslint:disable-next-line: no-shadowed-variable

    // tslint:disable-next-line:quotemark
    // tslint:disable-next-line:no-shadowed-variable
    export class ProductService {
      // tslint:disable-next-line:quotemark
      private _albumUrl = "../assets/album.json";

      // tslint:disable-next-line:quotemark
      private _productsUrl = "../assets/products.json";

      constructor(private _http: Http) {}

      getAlbum(_id: number): Observable<Album> {
        return this._http
          .get(this._albumUrl)
          .map((response) => <Album>response.json());
      }

      getProducts(): Observable<Product[]> {
        return this._http
          .get(this._productsUrl)
          .map((response) => <Product[]>response.json());
      }
    }
  }
}
