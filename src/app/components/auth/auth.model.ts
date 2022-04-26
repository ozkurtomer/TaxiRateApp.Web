export class LoginModel {
  formData(formData: any) {
    throw new Error('Method not implemented.');
  }
  UserEmail: string;
  UserPassword: string;
}

export class RegisterModel {
  UserName: string;
  UserUserName: string;
  UserPassword: string;
  UserRePassword: string;
  UserEmail: string;
  UserAnonymous: boolean;
}

export class AccessToken {
  userName: string;
  token: string;
  expiration: Date;
}
