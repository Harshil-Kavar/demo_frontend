export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  mobile: string;
  gender: string;
  workStatus: string;
  city: string[];
}
export interface LoginUser {
  email: string;
  password: string;
}
