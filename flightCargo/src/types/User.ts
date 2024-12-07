import { Address } from "./Address";
import { Role } from "./Role";

export interface User{
    id: string;
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
    phone?: string;
    password: string;
    id: string;
  }
