import { NgForm } from '@angular/forms';
import { DefaultConfig } from './config/default.config';

export class Utility extends DefaultConfig {
    /**
     * Generar Copia de un Objeto
     * @param obj objecto a copiar
     */
    static copyObj<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Estandarizar primera letra mayuscula
     * @param value String con el valor
     */
    static firstUpperCase(value: string) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }

        return value;
    }

    /**
     * Valida si un objeto por lo menos tiene una propiedad con valor
     * @param obj objeto a validar
     */
    static objectHasValue<T>(obj: T): boolean {
        if (obj) {
            if (Object.entries(obj).length === 0) {
                return false;
            }

            return Object.values(obj).find((value: any) => value !== null && value !== undefined && value !== '');
        } else { return false; }
    }

    /**
     * Reinicia el formulario
     * @param form Formulario a limpiar
     */
    static resetForm(form: NgForm): void {
        for (const obj in form.form.controls) {
            if (obj) {
                form.form.controls[obj].reset();
            }
        }
    }

    /**
     * Compara los valores de dos objetos con la misma estructura
     * @param obj1 objeto
     * @param obj2 objeto
     */
    static compareObjects<T>(obj1: T, obj2: T): boolean {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    /**
     * Reemplaza los valores de una formato definido {0} con los valores enviados
     * @param strFormat Cadena con el formato
     * @param srtArgs valores a reeemplazar en el formato
     */
    static format(strFormat: string, srtArgs: string[]): string {
        return strFormat.replace(/{(\d+)}/g, (match: string, itemNumber: number) =>
            ((srtArgs[itemNumber] && typeof srtArgs[itemNumber] !== 'undefined')
                ? srtArgs[itemNumber]
                : match));
    }
}
