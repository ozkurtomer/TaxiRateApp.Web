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
  UserIpAddress: string;
  UserAnonymous: boolean;
}

export class AccessToken {
  userName: string;
  userId: number;
  token: string;
  expiration: Date;
}

export class User {
  user_Id: number;
  user_Name: string;
  user_UserName: string;
  user_Email: string;
  user_PasswordHash: string;
  user_PasswordSalt: string;
  user_Ip: string;
  user_Anonymous: boolean;
  user_CreatedDate: boolean;
  user_IsActive: boolean;
}
