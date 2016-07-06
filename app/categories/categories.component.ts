import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../products/services/products.service';
import { IProduct } from '../products/interfaces/products';

@Component({
    templateUrl: 'app/categories/templates/categories.component.html',
    styleUrls: ['app/categories/styles/categories.component.css']
})

export class CategoriesComponent {
    pageTitle: string = 'Category';
    products: Array<IProduct> = [];
    errorMessage: string;
    private sub: any;

    constructor(private route: ActivatedRoute,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.pageTitle = 'Category ' + id;
                this.getProducts(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProducts(id: number) {
        this._productService.getProductsForCategoryId(id).subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error);
    }
}
