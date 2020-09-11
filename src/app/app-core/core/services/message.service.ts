import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Message } from '../objects/message.object';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Utility } from '../utility';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(readonly translate: TranslateService) { }

    showMessage(message: Message) {
        message.typeMessage = message.typeMessage || 'success';
        this.translate.get([`Messages.${message.typeMessage}.${message.text}`
            , `Messages.${message.typeMessage}.Title.${message.title}`
            , `Generic.Buttons.${message.confirmButton}`], { param: message.tags })
            .subscribe((res: any) => {
                Swal.fire({
                    title: (message.title && message.title !== '') ? res[`Messages.${message.typeMessage}.Title.${message.title}`] : '',
                    html: `${res[`Messages.${message.typeMessage}.${message.text}`]} ${message.details || ''}`,
                    icon: message.typeMessage,
                    showConfirmButton: (message.confirmButton && message.confirmButton !== ''),
                    confirmButtonText: (message.confirmButton && message.confirmButton !== '') ?
                        res[`Generic.Buttons.${message.confirmButton}`] : '',
                    confirmButtonColor: Utility.DEFAULT_CONFIG_APP.DefaultConfirmButtonColor,
                    timer: (message.confirmButton && message.confirmButton !== '') ? undefined : Utility.DEFAULT_CONFIG_APP.DefaultTimerMessage,
                    timerProgressBar: !(message.confirmButton && message.confirmButton !== ''),

                    onOpen: (objmessage) => {
                        objmessage.addEventListener('mouseenter', Swal.stopTimer);
                        objmessage.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            });
    }

    showToast(message: Message) {
        message.typeMessage = message.typeMessage || 'success';
        this.translate.get(`Messages.${message.typeMessage}.${message.text}`)
            .subscribe((res: string) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: Utility.DEFAULT_CONFIG_APP.DefaultTimerToast,
                    timerProgressBar: true,
                    onOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });

                Toast.fire({
                    icon: message.typeMessage,
                    title: res
                });
            });
    }

    showSuccess(message: Message) {
        message.typeMessage = 'success';
        this.showMessage(message);
    }

    showError(message: Message) {
        message.typeMessage = 'error';
        this.showMessage(message);
    }

    showWarning(message: Message) {
        message.typeMessage = 'warning';
        this.showMessage(message);
    }

    openConfirm(message: Message, param: string, callback, isQuestion: boolean = false) {
        this.translate.get([`Messages.${message.text}`
            , `Messages.Title.${message.title}`
            , `Generic.Buttons.${message.confirmButton}`
            , `Generic.Buttons.${message.cancelButton}`], { param })
            .subscribe((res: any) => {
                Swal.fire({
                    title: (message.title && message.title !== '') ? res[`Messages.Title.${message.title}`] : '',
                    html: `${res[`Messages.${message.text}`]} ${message.details || ''}`,
                    icon: (isQuestion) ? 'question' : 'warning',

                    confirmButtonColor: Utility.DEFAULT_CONFIG_APP.DefaultConfirmButtonColor,
                    showConfirmButton: (message.confirmButton && message.confirmButton !== ''),
                    confirmButtonText: (message.confirmButton && message.confirmButton !== '') ?
                        res[`Generic.Buttons.${message.confirmButton}`] : '',
                    cancelButtonColor: Utility.DEFAULT_CONFIG_APP.DefaultCancelButtonColor,
                    showCancelButton: (message.cancelButton && message.cancelButton !== ''),
                    cancelButtonText: (message.cancelButton && message.cancelButton !== '') ?
                        res[`Generic.Buttons.${message.cancelButton}`] : '',
                }).then((result) => {
                    if (result.value) {
                        callback();
                    }
                });
            });
    }

    confirmModalClosing(func: any, isUpdate: boolean) {
        this.translate.get([`Messages.GeneralConfirmIngresada`
            , `Messages.GeneralConfirmEditada`])
            .subscribe((res: any) => {
                this.openConfirm({
                    text: 'GeneralConfirm',
                    cancelButton: 'No',
                    confirmButton: 'Si'
                }, (isUpdate ? res[`Messages.GeneralConfirmEditada`] :
                    res[`Messages.GeneralConfirmIngresada`]), func, true);
            });
    }

    confirmAction(func: any, Mensaje: string) {
        this.openConfirm({
            text: Mensaje,
            cancelButton: 'No',
            confirmButton: 'Si'
        }, '', func, true);
    }

    validateError(status: number, error: HttpErrorResponse) {
        if (error.error && error.error.messageTag) {
            if (status === 400) {
                this.showWarning({ text: error.error.messageTag, tags: error.error.tags });
            } else {
                this.showError({ text: error.error.messageTag, tags: error.error.tags });
            }
        } else {
            this.showError({ text: 'ErrorNoControlado', confirmButton: 'Ok' });
        }
    }

    validateSuccess(response: any) {
        if (response.body && response.body.messageTag) {
            this.showSuccess({ text: response.body.messageTag, tags: response.body.tags });
        }
    }
}
