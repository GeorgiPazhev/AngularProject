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
