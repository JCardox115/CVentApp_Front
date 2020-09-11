import { MessageService } from 'src/app/app-core/core/services/message.service';
import { BaseGenericService } from './services/basegeneric.services';

export class BaseComponent<T> {
    $onMethod: any;

    constructor(readonly serviceEntidad: BaseGenericService<T>,
                readonly messageService: MessageService) { }

    confirmAction($callBack: any): void {
        if ($callBack) {
            this.messageService.confirmAction($callBack, 'ConfirmarEliminacion');
        }
    }

    Delete<TValue>(idEliminar: TValue): void {
        this.confirmAction(() => {
            this.serviceEntidad.delete(idEliminar)
                .subscribe(() => {
                    if (this.$onMethod) { this.$onMethod(); }
                });
        });
    }
}
