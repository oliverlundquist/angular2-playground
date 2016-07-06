import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ProductService } from './products/services/products.service';

@Component({
    selector: 'ms-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/categories/1']">Category1</a></li>
                    <li><a [routerLink]="['/categories/2']">Category2</a></li>
                    <li><a [routerLink]="['/categories/3']">Category3</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS]
})

export class AppComponent {
    pageTitle: string = 'Angular2 RC4 Demo';
}
