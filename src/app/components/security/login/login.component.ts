import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/models/login-request';
import { ApiService } from 'src/app/services/api.service';
import { LocalStService } from 'src/app/services/local-st.service';
import { UserSecurityService } from 'src/app/services/user-security.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { LocalService } from 'src/app/services/localService';



@Component({
  selector: 'app-auth-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginrequest: LoginRequest = {
    email: 'amazonas@bythewave.co',
    password: 'Santi1020'
  };

  selectedcompany: any = {
    CompanyID: 0,
    TypeID: 0,
    FiscalID: 0,
    Name: '',
    TradeName: '',
    CIIUCode: '',
    FiscalResp: '',
    CountryID: 0,
    StateID: 0,
    CityID: 0,
    Address: '',
    PhoneNum: '',
    EMailAddress: '',
    CurrencyCode: '',
    DecimalQty: 0,
    DecimalSeparator: '',
    FiscalResponsabilityID: '',
    FactE: false,
    Inactive: false
  };

  public rUser: boolean = false;
  public rPass: boolean = false;
  public loading: boolean = false;
  public companysbyuser: any[];
  public errorCompania: string = '';
  test: boolean = false;

  constructor(
    private service: ApiService,
    private localStorage: LocalService,
    private localstservice: LocalStService,
    private router: Router,
    private usersecurity: UserSecurityService,
  ) {
  }

  ngOnInit() {

    if (!this.test) {
      this.loginrequest = {
        email: '',
        password: ''
      };
    }
  }

  async login() {
    this.localstservice.doLogout();
    try {
      this.loading = true;


      //EMPIEZA ACA
      await this.service.AskForToken(this.loginrequest)
        .then(async (res: any) => {
          await this.loadsession(res['AccessToken'])
          //
        })
        .catch(async (error: any) => {
          if (error.error.Message === "No se encontro un token valido.") {
            await this.service.token(this.loginrequest)
              .then(async (res: any) => {
                ///Guarda el token
                let saveToken = res;
                await this.service.SaveToken(res, this.loginrequest)
                  .then(async (res: any) => {
                    if (res === "Proceso exitoso!") {
                      await this.loadsession(saveToken['access_token']);
                      //CLOSE
                    }
                  })
                  .catch((error: any) => {
                    this.loading = false;
                    Swal.fire('Notificación', error.error.Message, 'warning');
                  });
              })
              .catch((error: any) => {
                this.loading = false;
                Swal.fire(error.error.error, error.error.error_description, 'warning');
              })
          }
          else {
            this.loading = false;
            Swal.fire('Notificación', error.error.Message, 'warning');
          }
        })
      //TERMINA ACÁ
    } catch (error) {
      this.loading = false;
      Swal.fire('Notificación', error, 'warning');
    }
  }

  async loadsession(token) {
    try {
      this.localstservice.setToken(token);
      /////Guarda datos del usuario en un Json encriptado
      await this.service.getUserData(this.loginrequest)
        .then(async (res: any) => {
          let user_response: User = res;
          this.localStorage.setJsonValue('userID', user_response.UserID);
          let userID = JSON.stringify(user_response.EMailAddress);
          userID = userID.toString().replace('"', '');
          userID = userID.toString().replace('"', '');
          this.localStorage.setJsonValue('CIAM', res.CompanyMasterID);
          this.localStorage.setJsonValue('user', userID);
          //
        }).catch((error: any) => {
          this.loading = false;
          if (error.status === 401) {
            Swal.fire('Notificación', error.error, 'warning');
          } else {
            Swal.fire('Error User Data', error.error.Message, 'error');
          }
          return;
        });
    } catch (error) {
      console.log(error);
      Swal.fire('Notificación', error, 'error');
    }
  }

  leavePassword(event) {
    try {
      if (event.keyCode === 13) {
        document.getElementById("password").focus();
      }
    } catch (error) {

    }
  }

  enterPassword(event) {
    try {
      if (event.keyCode === 13) {
        this.login();
      }
    } catch (error) {

    }
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    this.loading = false;
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleModalComponent(response) {
    if (response === 0 || response === 1) {
      this.loading = false;
    }
    if (response.val) {
      this.router.navigateByUrl("/app");
    }
  }
}
