import { HttpClient } from '@angular/common/http';

export class BaseGenericSimpleService {
    baseAPI: string;
    baseExternalAPI: string;

    constructor(readonly http: HttpClient, urlBaseAPI: string, api: string) {
        this.baseExternalAPI = urlBaseAPI;
        this.baseAPI = urlBaseAPI + api;
    }

    get() {
        return this.http.get(`${this.baseAPI}/`);
    }

    getExterno(externo: string) {
        return this.http.get(`${this.baseExternalAPI + externo}/`);
    }

    getMethod(method: string) {
        return this.http.get(`${this.baseAPI}/${method}`);
    }

    getMethodExterno(externo: string, method: string) {
        return this.http.get(`${this.baseExternalAPI + externo}/${method}`);
    }

    getId(id: number) {
        return this.http.get(`${this.baseAPI}/${id}`);
    }

    getIdMethod(method: string, id: number) {
        return this.http.get(`${this.baseAPI}/${method}/${id}`);
    }

    getIdMethodExterno(externo: string, method: string, id: number) {
        return this.http.get(`${this.baseExternalAPI + externo}/${method}/${id}`);
    }

    put<TObject>(ObjEntidad: TObject) {
        return this.http.put(`${this.baseAPI}`, ObjEntidad);
    }

    putMethod<TValue>(method: string, ObjEntidad: TValue) {
        return this.http.put(`${this.baseAPI}/${method}`, ObjEntidad);
    }

    putMethodExterno<TValue>(externo: string, method: string, ObjEntidad: TValue) {
        return this.http.put(`${this.baseExternalAPI + externo}/${method}`, ObjEntidad);
    }

    delete<TValue>(id: TValue) {
        return this.http.delete(`${this.baseAPI}/${id}`);
    }

    deleteMethod<TValue>(method: string, id: TValue) {
        return this.http.delete(`${this.baseAPI}/${method}/${id}`);
    }

    deleteMethodExterno<TValue>(externo: string, method: string, id: TValue) {
        return this.http.delete(`${this.baseExternalAPI + externo}/${method}/${id}`);
    }

    post<TObject>(ObjEntidad: TObject) {
        return this.http.post(`${this.baseAPI}`, ObjEntidad);
    }

    postMethod<TValue>(method: string, ObjEntidad: TValue) {
        return this.http.post(`${this.baseAPI}/${method}`, ObjEntidad);
    }

    postMethodExterno<TValue>(externo: string, method: string, ObjEntidad: TValue) {
        return this.http.post(`${this.baseExternalAPI + externo}/${method}`, ObjEntidad);
    }
}
