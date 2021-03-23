import { Component, OnInit } from '@angular/core';

import { BaseModalComponent } from '@appcore/basemodal.component';
import { MessageService } from '@appcore/services/message.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../services/product.object';
import { ProductsService } from '../services/product.service';


@Component({
    selector: 'app-product-modal',
    templateUrl: './product.modal.component.html'
})
export class ProductModalComponent extends BaseModalComponent<Product> implements OnInit {

    constructor(readonly productService: ProductsService,
        readonly modal: NgbActiveModal,
        readonly messageService: MessageService) {
        super(productService, modal, messageService);
        this.objEntidad = {};
    }

    ngOnInit(): void {
    }

    onDelete() { this.Delete(this.objEntidad.productID); }
}
