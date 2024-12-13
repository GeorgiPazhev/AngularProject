import { Address } from "./Address";
import { Role } from "./Role";

export interface User{
    _id: string;
    phone:string;
    email:string;
    username: string;
    password: string;
    roles:Role[];
    addresses:Address[];
}

export interface UserForAuth {
    username: string;
    email: string;
    tel: string;
    password: string;
    _id: string;
  }
