export class LoginModel {
  formData(formData: any) {
    throw new Error('Method not implemented.');
  }
  UserEmail: string;
  UserPassword: string;
}

export class RegisterModel {
  userName: string;
  userUserName: string;
  userPassword: string;
  userRePassword: string;
  userEmail: string;
  userAnonymous: boolean;
}

export class AccessToken {
  userId: number;
  token: string;
  expiration: Date;
}
