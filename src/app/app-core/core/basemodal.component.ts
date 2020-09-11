import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utility } from 'src/app/app-core/core/utility';
import { MessageService } from 'src/app/app-core/core/services/message.service';
import { BaseGenericService } from './services/basegeneric.services';
import { BaseComponent } from './base.component';

export class BaseModalComponent<T> extends BaseComponent<T> {
    isUpdate = false;
    isView = false;
    objEntidad: T;
    objEntidadCopy: T;
    $onMethodSuccess: any;

    summernoteConfig = Utility.DEFAULT_SUMMERNOTE_CONFIG;
    patternValidation = Utility.PatternValidation;

    constructor(readonly serviceEntidad: BaseGenericService<T>,
                readonly modal: NgbActiveModal,
                readonly messageService: MessageService) {
        super(serviceEntidad, messageService);

        this.$onMethod = (): void => {
            if (this.modal) { this.modal.close(); }
            if (this.$onMethodSuccess) { this.$onMethodSuccess(); }
        };
    }

    Init(obj: T): void {
        this.objEntidad = Utility.copyObj(obj);
        this.objEntidadCopy = Utility.copyObj(obj);
    }

    onCreate(): void {
        this.serviceEntidad.create(this.objEntidad)
            .subscribe(res => {
                if (res) {
                    if (this.$onMethod) { this.$onMethod(); }
                }
            });
    }

    onUpdate(): void {
        this.serviceEntidad.update(this.objEntidad)
            .subscribe(() => {
                if (this.$onMethod) { this.$onMethod(); }
            });
    }

    closeModal($event?: any): void {
        if ($event) {
            $event.preventDefault();
        }

        if (!this.isUpdate && Utility.objectHasValue(this.objEntidad)) {
            this.messageService.confirmModalClosing(this.modal.dismiss, this.isUpdate);
        } else if (this.isUpdate && !Utility.compareObjects(this.objEntidad, this.objEntidadCopy)) {
            this.messageService.confirmModalClosing(this.modal.dismiss, this.isUpdate);
        } else {
            this.modal.dismiss();
        }
    }
}
