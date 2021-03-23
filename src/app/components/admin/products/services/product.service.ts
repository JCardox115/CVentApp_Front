import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.object';
import { HomeService } from 'src/app/services/home.service';
import { HeaderService } from 'src/app/services/header.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseGenericService } from '@appcore/services/basegeneric.services';


@Injectable({
    providedIn: 'root'
})
export class ProductsService extends BaseGenericService<Product> {
    constructor(
        readonly http: HttpClient,
        readonly homeservice: HomeService,
        readonly headerService: HeaderService,
        readonly snackBarService: MatSnackBar) { super(http, 'Products'); }

    addItemToCart(item: Product) {
        this.homeservice.addItemToCart(item)
        this.openSnackBar("Se agrego el producto a su carrito de compras.", "Ver carrito!")
        this.headerService.ReloadCar();
    }

    addItemToWishList(item: Product) {
        this.homeservice.addItemToCart(item)
        this.openSnackBar("Se agrego el producto a la lista de deseos.", "Ver Lista de Deseos!")
        this.headerService.ReloadCar();
    }

    openSnackBar(message: string, action: string) {
        this.snackBarService.open(message, action, {
            duration: 2000,
            panelClass: "success-dialog",
        });
    }
}
