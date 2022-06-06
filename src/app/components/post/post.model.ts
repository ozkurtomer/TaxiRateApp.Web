import { User } from '../auth/auth.model';
import { Cities } from '../city/city.model';

export class Post {
  post_Id: number;
  user_Id: number;
  city_Id: number;
  post_Plate: string;
  post_Title: string;
  post_Description: string;
  post_Stars?: number;
  post_LikeCount?: number;
  post_CreatedDate: Date;
  post_IsActive: boolean;

  city: Cities;
  user: User;
  comments: Comments[];
}

export class Comments {
  comment_Id: number;
  post_Id: number;
  user_Id: number;
  comment_Description: string;
  comment_IsActive: boolean;
  comment_CreatedDate: Date;

  user: User;
}
