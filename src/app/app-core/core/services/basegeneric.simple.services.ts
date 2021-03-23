import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '../../../app-config/app.config';
import { environment } from '../../../../environments/environment.prod';


export class BaseGenericSimpleService {
  baseAPI: string;
  baseExternalAPI: string;
  nameAPI: string;

  constructor(readonly http: HttpClient, api: string, urlBaseAPI = '') {
    if (urlBaseAPI && urlBaseAPI.length > 0) {
      this.baseExternalAPI = urlBaseAPI;
    } else {
      this.baseExternalAPI = environment.baseAPI;
    }

    this.baseAPI = this.baseExternalAPI + api;
    this.nameAPI = api;
  }

  get() {
    return this.http.get(`${this.baseAPI}/`);
  }

  getExterno(externo: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/`);
  }

  getUploadFiles(externo: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/`);
  }

  getMethod(method: string) {
    return this.http.get(`${this.baseAPI}/${method}`);
  }

  getMethodParameters(method: string, parameter: string, parameter2: string) {
    return this.http.get(`${this.baseAPI}/${method}/${parameter}/${parameter2}`);
  }

  getMethodExternoParameters(externo: string, method: string, parameter: string, parameter2: number) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}/${parameter}/${parameter2}`);
  }

  getMethodExterno(externo: string, method: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}`);
  }

  getMethodExternoParameter(externo: string, method: string, parameter: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}/${parameter}`);
  }

  getId(id: number) {
    return this.http.get(`${this.baseAPI}/${id}`);
  }

  getIdMethod(method: string, id: number) {
    return this.http.get(`${this.baseAPI}/${method}/${id}`);
  }

  customGet(method: string, id: number) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.baseAPI}/${method}/${id}`;
      this.http
        .get<any[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  getIdMethodExterno(externo: string, method: string, id: number) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}/${id}`);
  }

  getUploadedFiles(externo: string, method: string, filename: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}/${filename}`);
  }

  saveFile(externo: string, method: string, file: any) {
    return this.http.post(`${this.baseExternalAPI + externo}/${method}`, file);
  }

  loadFile(externo: string, method: string, file: any, idCompany) {
    return this.http.post(`${this.baseExternalAPI + externo}/${method}${'?companyId=' + idCompany}`, file);
  }

  saveFileBanck(externo: string, method: string, file: any, idCompany: number, res: boolean) {
    return this.http.post(`${this.baseExternalAPI + externo}/${method}${'?companyId=' + idCompany}${'&importWithNotRequiredEmptyFields='}${res}`, file);
  }

  deleteFile(externo: string, method: string, file: any[]) {
    return this.http.post(`${this.baseExternalAPI + externo}/${method}`, file);
  }
  put<TObject>(ObjEntidad: TObject) {
    return this.http.put(`${this.baseAPI}`, ObjEntidad);
  }

  putMethod<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.put(`${this.baseAPI}/${method}`, ObjEntidad);
  }

  putMethodWhitCompany<TValue>(method: string, ObjEntidad: TValue, company: number) {
    return this.http.put(`${this.baseAPI}/${method}${'?companyId=' + company}`, ObjEntidad);
  }

  putMethodWhitCompany2<TValue>(method: string, ObjEntidad: TValue, company: number) {
    return this.http.put(`${this.baseAPI}/${method}/${company}`, ObjEntidad);
  }

  putMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.put(
      `${this.baseExternalAPI + externo}/${method}`,
      ObjEntidad
    );
  }

  delete<TValue>(id: TValue) {
    return this.http.delete(`${this.baseAPI}/${id}`);
  }

  deleteMethod<TValue>(method: string, id: TValue) {
    return this.http.delete(`${this.baseAPI}/${method}/${id}`);
  }

  deleteMethodByCompany<TValue>(method: string, id: TValue, companyId: TValue) {
    return this.http.delete(`${this.baseAPI}/${method}/${id}/${companyId}`);
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

  postMethodExterno<TValue>(
    externo: string,
    method: string,
    ObjEntidad: TValue
  ) {
    return this.http.post(
      `${this.baseExternalAPI + externo}/${method}`,
      ObjEntidad
    );
  }
}
