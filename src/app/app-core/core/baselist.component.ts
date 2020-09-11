import { Utility } from 'src/app/app-core/core/utility';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';
import { MessageService } from 'src/app/app-core/core/services/message.service';
import { BaseGenericService } from './services/basegeneric.services';
import { Filters } from './objects/filter.object';
import { BaseComponent } from './base.component';

export class BaseListComponent<T> extends BaseComponent<T> {
    defaultPage = Utility.DEFAULT_CONFIG_APP.DEFAULT_PAGE;
    numberRecords = Utility.DEFAULT_CONFIG_APP.DEFAULT_NUMBERRECORDS;
    defaultStyleTable = 'table table-hover table-striped';

    page = this.defaultPage;
    sort: Sort;
    filters: Filters;

    $ListOrdered: any;
    $Modal: any;

    constructor(readonly serviceEntidad: BaseGenericService<T>,
                readonly modalService: NgbModal,
                readonly messageService: MessageService) {
        super(serviceEntidad, messageService);

        this.$onMethod = (): void => {
            this.pageData(this.defaultPage);
        };
    }

    sortData(sort: Sort): void {
        this.sort = sort;
        if (this.$ListOrdered) { this.$ListOrdered(); }
    }

    filterData(filter: Filters): void {
        this.filters = filter;
        this.page = this.defaultPage;
        if (this.$ListOrdered) { this.$ListOrdered(); }
    }

    pageData(page: number): void {
        this.page = page;
        if (this.$ListOrdered) { this.$ListOrdered(); }
    }

    numberRecordsData(numberRecord: number): void {
        this.numberRecords = numberRecord;
        this.page = this.defaultPage;
        if (this.$ListOrdered) { this.$ListOrdered(); }
    }

    openModal(objEntidad?: T, isView?: boolean): void {
        if (this.$Modal) {
            const modalRef = this.modalService.open(this.$Modal, { size: 'lg', backdrop: 'static' });

            if (objEntidad) {
                modalRef.componentInstance.isUpdate = true;
                modalRef.componentInstance.isView = ((isView) ? isView : false);
                modalRef.componentInstance.Init(objEntidad);
            }
            modalRef.result
                .then(() => { this.pageData(this.defaultPage); })
                .catch(() => { });
        }
    }
}
