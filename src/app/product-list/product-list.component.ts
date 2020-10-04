// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";

// tslint:disable-next-line:quotemark
import { Product } from "../product";

// tslint:disable-next-line:quotemark
import { ProductService } from "../product.service";

@Component({
  // tslint:disable-next-line:quotemark
  selector: "app-product-list",
  // tslint:disable-next-line:quotemark
  templateUrl: "./product-list.component.html",
  // tslint:disable-next-line:quotemark
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private _productService: ProductService) {}

  // tslint:disable-next-line:member-ordering

  ngOnInit() {
    this._productService
      .getProducts()
      .subscribe(response =>this.products = response);
  }
}
